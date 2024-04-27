const express = require("express");
const router = express.Router();
const projectCommentsHandler = require("../handlers/project.comments.handler"); 

//post = create
router.post("/projectComments",projectCommentsHandler.createComment); 
router.get("/projectComments",projectCommentsHandler.getComment);
router.delete("/projectComments/:commentId",projectCommentsHandler.deleteComment);

module.exports = router;