const projectModel = require("../models/project.model")
const createProject = async (req,res) => {
    const payload = req.body;
    const dbResp = await projectModel.create(payload);
    res.send(dbResp);
}

const getProject = async (req,res) => {
    const projects = await projectModel.find();
    res.send(projects);
} 

const updateProject = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await projectModel.updateOne({
        _id : req.params.projectId
    }, newPayload);
    res.send(newDbResp);
}

module.exports = {createProject,getProject, updateProject};