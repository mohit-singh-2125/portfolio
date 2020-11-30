
const projectsCore = require('../../../cores/v1/projects/projects');
const projectObj = new projectsCore.ProjectClass();


module.exports = {
    listProjectService, deleteProjectService,createProjectService
};

function listProjectService(reqParams) {
    return new Promise((resolve, reject) => {
        // CALL CORE FUNCTIONS HERE & BASED ON OUTPUT RETURN DATA TO CONTROLLER
        projectObj.findAll(reqParams)
            .then((response) => {
                resolve(response);
            })
    });
}

function deleteProjectService(params) {
    return new Promise((resolve, reject) => {
        projectObj.delete(params)
            .then((response) => {
                resolve(response);
            })

    })
}

function createProjectService(reqParams) {

    return new Promise((resolve, reject) => {
        projectObj.create(reqParams)
                .then((response) => {
                  resolve(response);
                })
                .catch((ex) => {
                    reject(ex);
                })
    })
}

