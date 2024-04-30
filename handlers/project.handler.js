const {  mongoose } = require("mongoose");
const projectModel = require("../models/project.model")
const createProject = async (req,res) => {
    const payload = req.body;
    const userId = req.userId;
    payload.ownerId = userId;
    console.log(payload);
    const dbResp = await projectModel.create(payload);
    res.send(dbResp);
}

const getProject = async (req,res) => {
    const filter = req.params.projectId ? {
        _id : req.params.projectId
    } : {};
    const projects = await projectModel.find(filter).populate(["categoryIds",{
        path: 'ownerId',
        select: 'username email', // Projection: include only username and email fields
      },{
        path: 'collaboratorIds',
        select: 'username email', // Projection: include only username and email fields
      }]);
    res.send(projects);
} 

const updateProject = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await projectModel.updateOne({
        _id : req.params.projectId
    }, newPayload);
    res.send(newDbResp);
}

const deleteProject = async (req, res) => {
    const projectId = req.params.projectId;
    const newDbResp = await projectModel.findOneAndDelete({
        _id: projectId 
    });
    res.send(newDbResp);
}

module.exports = {createProject,getProject, updateProject,deleteProject};