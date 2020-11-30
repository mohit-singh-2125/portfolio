const MODELS = require('../../../models/mysql/index');

const ProjectsSchemaModel = MODELS.projects;


class Projects {


    create(reqParams) {
        return new Promise((resolve, reject) => {
            ProjectsSchemaModel.create({
                key:reqParams.key,
                name:reqParams.name,
                client: reqParams.client,
                role: reqParams.role,
                tech: reqParams.tech,
                description: reqParams.description
            })
                .then((response) => {
                    
                    resolve(response);
                }).catch((err) => {
                    console.log(err)
                    reject(err);
                });
        });
    }


  

    findAll(reqParams) {
        return new Promise((resolve, reject) => {

            ProjectsSchemaModel.findAll(
            {where:{
                key:reqParams.key
            }}).then((result) => {
                resolve(result);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        });
    }


  

    delete(reqParams) {
        console.log(reqParams);
        return new Promise((resolve, reject) => {
            ProjectsSchemaModel.delete(
                { where: { id: reqParams.id } })
                
                .then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        });
    }
}

module.exports = {
    ProjectClass: Projects,
};
