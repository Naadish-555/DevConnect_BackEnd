const express = require("express");
const router = express.Router();
const projectHandlers = require("../handlers/project.handler"); 
const verifyToken = require("../middleware/middleware.authMiddleware")

//post = create
router.post("/project",verifyToken,projectHandlers.createProject); 
router.get("/project",projectHandlers.getProject);
router.patch("/project/:projectId",verifyToken,projectHandlers.updateProject);
router.delete("/project/:projectId",verifyToken,projectHandlers.deleteProject);

module.exports = router;