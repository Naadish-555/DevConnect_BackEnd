const mongoose = require("mongoose")
const projectCommentsSchema = new mongoose.Schema({
    userId:String,
    comment:String,
    projectId:String
},{
    timestamps : true
});

const projectComm = mongoose.model("Project Comments",projectCommentsSchema);
module.exports = projectComm;