const projectComm = require("../models/project.comments.model")

const createComment = async (req, res) => {
    const com = req.body;
    const savedComment = await projectComm.create(com);
    res.send(savedComment);
}

const getComment = async (req, res) => {
    const comts = await projectComm.find();
    res.send(comts);
}

const deleteComment = async (req, res) => {
    const delcom = await projectComm.deleteOne({
        _id : req.params.commentId
    });
    res.send(delcom);
}

module.exports = {createComment, getComment, deleteComment};
