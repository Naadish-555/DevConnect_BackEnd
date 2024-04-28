const express = require("express");
const router = express.Router();
const inviteHandler = require("../handlers/invites.handler"); 
const { verifyToken } = require("../middleware/middleware.authMiddleware");

//send request to join a project
router.post("/invite",verifyToken,inviteHandler.sendInvite);

//Get all requests for a project
//middleware to identify owner
router.get("/invites/:projectId",verifyToken,inviteHandler.getInvites);

//get all requests for that user id
router.get("/invites/:userId",verifyToken,inviteHandler.getAllInvites);


//accept or deny a request
router.patch("/invites/:inviteId",verifyToken,inviteHandler.respondInvite);


module.exports = router;