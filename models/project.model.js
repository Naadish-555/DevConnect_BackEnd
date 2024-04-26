const mongoose = require("mongoose")
const projectSchema = new mongoose.Schema({
    id:String,
    categoryIds:Array,
    title:String,
    description:String,
    statusID:String
},{
    timestamps : true
});

const projectModel = mongoose.model("Projects",projectSchema);
module.exports = projectModel;