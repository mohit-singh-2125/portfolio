let express = require('express');
let router = express.Router();

let {  listMessages,createMessage,deleteMessages} = require("./contacts/contact");




router.post("/contact/list", listMessages);
router.post("/contact/create", createMessage);
router.post("/contact/delete", deleteMessages);


module.exports = router;


