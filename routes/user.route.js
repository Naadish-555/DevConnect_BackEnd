const express = require("express");
const router = express.Router();
const userHandler = require("../handlers/user.handler"); 
const { verifyToken } = require("../middleware/middleware.authMiddleware");

//post = create
router.post("/register",userHandler.register); 
router.post("/login",userHandler.login);
router.get("/users/:userId?",userHandler.getUser);
router.patch("/users/:userId",[verifyToken],userHandler.updateUser);
// router.delete("/user/:projectId",projectHandlers.deleteProject);

module.exports = router;