let express = require('express');
let router = express.Router();

let {  listMessages,createMessage,deleteMessages} = require("./contacts/contact");
let {  listProject,createProject,deleteProject} = require("./projects/projects");




router.post("/contact/list", listMessages);
router.post("/contact/create", createMessage);
router.post("/contact/delete", deleteMessages);

router.post("/project/list", listProject);
router.post("/project/create", createProject);
router.post("/project/delete", deleteProject);


module.exports = router;


