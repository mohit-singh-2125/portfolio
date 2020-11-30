'use strict';
const messages = require('../../../utility/message_code.json').curd;
const {  listProjectService, deleteProjectService,createProjectService } = require('../../../service/v1/projects/projects');

module.exports = {
    listProject,createProject,deleteProject
};
function listProject(req, res) {
    let reqParams = req.body;
    listProjectService(reqParams)
        .then((data) => {
            res.status(200);
            res.json({
                message: res ? messages.find[200] : messages.find[404],
                data: data,
            });
        })
        .catch((ex) => {
            res.status(500);
            res.json({
                status: false,
                statusCode: 500,
                message: messages[500],
            });
            console.log(ex)
        })
}



function createProject(req, res) {
    let reqParams = req.body;
    console.log("controler")
    createProjectService(reqParams)
                .then((data) => {
               
                    res.status(200);
                    res.json({

                        message: reqParams.id === 0 ?
                            reqParams.id === 0 ? messages.save[200] : messages.save[404]
                            : reqParams.id !== 0 ? messages.update[200] : messages.update[404],
                        data: data,
                    });
                })
                .catch((ex) => {
                    console.log("contollerError",ex)
                    res.status(500);
                    res.json({
                        status: false,
                        statusCode: 500,
                        message: messages[500],
                    });
                    //console.log(ex)
                })
}


function deleteProject(req, res) {
    let reqParams = req.body;
    // console.log("In controller::"+JSON.stringify(req.body))
    deleteProjectService(reqParams)
        .then((response) => {
            const responseReceived = response; // CONDITION FOR ARRAY RESPONSE

            res.json({
                status: responseReceived,
                statusCode: responseReceived[0] == 1 ? 200 : 404,
                message: responseReceived[0] === 1 ? messages.delete[200] : messages.delete[404],
                data: response[0],
            })

        })
        .catch((ex) => {
            res.status(500);
            res.json({
                status: false,
                statusCode: 500,
                message: messages[500],
            });
            //console.log(ex)
        })
}
