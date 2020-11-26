var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const { msgTemplate, } = require('./template');

var transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'toolticket52@gmail.com',
        pass: 'tickett00L'
    }
}));

module.exports = { sendEmail };

function sendEmail(emailTo, templateId, templateBody, attach) {

    return new Promise((resolve, reject) => {
        let htmlBody = '';
        let subjectBody = '';
        if (templateId == "msg") {
            htmlBody = msgTemplate(templateBody);
            subjectBody = "New Message";
        }
        

        var mailOptions = {
            
            from: 'toolticket52@gmail.com',
            to: emailTo,
            subject: subjectBody,
            html: htmlBody
        };
    
       

        // console.log(JSON.stringify(mailOptions))

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject();
            } else {
                try {
                    console.log('Email sent: ' + info.response);
                    // console.log("Password : " + password);
                    resolve(info);
                } catch (error) {
                    console.log('ERROR', error);
                }
            }
        })

    })
}


