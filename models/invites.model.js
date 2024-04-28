const mongoose = require("mongoose");
const inviteSchema = new mongoose.Schema({

    //id of sender
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    //project id will be used to fetch id of project owner
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

const inviteModel = mongoose.model('Invites', inviteSchema);
module.exports = inviteModel;