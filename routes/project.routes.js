const express = require("express");
const router = express.Router();
const projectHandlers = require("../handlers/project.handler"); 
const { verifyOwner, verifyToken } = require("../middleware/middleware.authMiddleware");

//post = create
router.post("/project",verifyToken,projectHandlers.createProject); 
router.get("/project",projectHandlers.getProject);
router.patch("/project/:projectId",[verifyToken, verifyOwner],projectHandlers.updateProject);
router.delete("/project/:projectId",[verifyToken, verifyOwner],projectHandlers.deleteProject);

module.exports = router;