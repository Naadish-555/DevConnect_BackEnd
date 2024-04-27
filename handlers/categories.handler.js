const categoriesModel = require("../models/categories.model");
const projectModel = require("../models/project.model");
const createCategory = async (req,res) => {
    const payload = req.body;
    const dbResp = await categoriesModel.create(payload);
    res.send(dbResp);
}

const getCategory = async (req,res) => {
    const projects = await categoriesModel.find();
    res.send(projects)
} 

// request contains basically 3 types of inputs
// 1. req.body
// 2. req.params
// 3. req.query
// 4. req.headers
const updateCategory = async (req, res) => {
    const newPayload = req.body;
    const newDbResp = await categoriesModel.updateOne({
        _id : req.params.categoryId
    }, newPayload);
    res.send(newDbResp);
}

const deleteCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    const isCategoryInUse = await projectModel.findOne({
        categoryIds: {
            $in : categoryId
        }
    });
    if(isCategoryInUse) {
        return res.status(409).send({
            "result" : "Category Already in Use"
        })
    }
    const newDbResp = await categoriesModel.deleteOne({
        _id : categoryId
    });
    res.send(newDbResp);
}

module.exports = {createCategory,getCategory,updateCategory,deleteCategory};