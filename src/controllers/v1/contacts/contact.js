'use strict';
const messages = require('../../../utility/message_code.json').curd;
const {  listMessagesService, deleteMessagesService,createMessageService } = require('../../../service/v1/contacts/contacts');

module.exports = {
    listMessages,createMessage,deleteMessages
};
function listMessages(req, res) {

    listMessagesService()
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



function createMessage(req, res) {
    let reqParams = req.body;
    console.log("controler")
            createMessageService(reqParams)
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


function deleteMessages(req, res) {
    let reqParams = req.body;
    // console.log("In controller::"+JSON.stringify(req.body))
    deleteMessagesService(reqParams)
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
