
const contactsCore = require('../../../cores/v1/contacts/contacts');
const contactObj = new contactsCore.ContactClass();
const { sendEmail } = require('../../../utility/email');

module.exports = {
    listMessagesService, deleteMessagesService,createMessageService
};

function listMessagesService() {
    return new Promise((resolve, reject) => {
        // CALL CORE FUNCTIONS HERE & BASED ON OUTPUT RETURN DATA TO CONTROLLER
        contactObj.findAll()
            .then((response) => {
                resolve(response);
            })
    });
}

function deleteMessagesService(params) {
    return new Promise((resolve, reject) => {
        contactObj.delete(params)
            .then((response) => {
                resolve(response);
            })

    })
}

function createMessageService(reqParams) {

    return new Promise((resolve, reject) => {
            contactObj.create(reqParams)
                .then((response) => {
                   

data={
    name:reqParams.name,
    email:reqParams.email,
    phone:reqParams.phone,
    subject:reqParams.subject,
    message:reqParams.message,
}
                    sendEmail("mohits2125@gmail.com", 'msg', data );


                    resolve(response);
                })
                .catch((ex) => {
                    reject(ex);
                    console.log("create service");
                })
    })
}

