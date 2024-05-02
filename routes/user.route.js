const express = require("express");
const router = express.Router();
const userHandler = require("../handlers/user.handler"); 

//post = create
router.post("/register",userHandler.register); 
router.post("/login",userHandler.login);
// router.get("/project/:projectId?",projectHandlers.getProject);
// router.patch("/user/:projectId",projectHandlers.updateProject);
// router.delete("/user/:projectId",projectHandlers.deleteProject);

module.exports = router;