const express = require("express");
const router = express.Router();
const projectHandlers = require("../handlers/project.handler"); 

//post = create
router.post("/project",projectHandlers.createProject); 
router.get("/project",projectHandlers.getProject);
router.patch("/project/:projectId",projectHandlers.updateProject);


module.exports = router;