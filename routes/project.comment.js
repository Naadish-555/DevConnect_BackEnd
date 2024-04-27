const express = require("express");
const router = express.Router();
const projectCommentsHandler = require("../handlers/project.comments.handler"); 
const verifyToken = require("../middleware/middleware.authMiddleware")

//post = create
router.post("/projectComments",verifyToken,projectCommentsHandler.createComment); 
router.get("/projectComments",projectCommentsHandler.getComment);
router.delete("/projectComments/:commentId",verifyToken,projectCommentsHandler.deleteComment);

module.exports = router;