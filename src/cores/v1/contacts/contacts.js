const MODELS = require('../../../models/mysql/index');

const ContactSchemaModel = MODELS.contacts;


class Contacts {


    create(reqParams) {
        return new Promise((resolve, reject) => {
            console.log(reqParams)
            ContactSchemaModel.create({
                name:reqParams.name,
                email: reqParams.email,
                phone: reqParams.phone,
                message: reqParams.message
            })
                .then((response) => {
                    
                    resolve(response);
                }).catch((err) => {
                    console.log(err)
                    reject(err);
                });
        });
    }


  

    findAll() {
        return new Promise((resolve, reject) => {

            ContactSchemaModel.findAll().then((result) => {
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
            ContactSchemaModel.delete(
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
    ContactClass: Contacts,
};
