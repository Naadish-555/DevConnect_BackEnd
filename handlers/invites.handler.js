const inviteModel = require("../models/invites.model")

const sendInvite = async (req,res) => {
    try {
        const { userId, projectId } = req.body;
        const existingInvite = await inviteModel.findOne({ userId, projectId });
        if (existingInvite && existingInvite.status != "rejected") {
            return res.status(400).json({ message: 'You have already sent a request for this project' });
        }
        const invite = new inviteModel({ userId, projectId });
        await invite.save();
        res.json({ message: 'Request sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getInvites = async (req,res) => {
    try {
        const { projectId } = req.params;
        const invites = await inviteModel.find({ projectId });
        res.json(invites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
} 

const getAllInvites = async (req,res) => {
    try {
        const { userId } = req.params;
        const invites = await inviteModel.find({ userId });
        res.json(invites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const respondInvite = async (req, res) => {
    try {
        const { inviteId } = req.params;
        const { status } = req.body;
        const invite = await inviteModel.findByIdAndUpdate(inviteId, { status }, { new: true });
        res.json(invite);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {sendInvite,getInvites,getAllInvites,respondInvite};