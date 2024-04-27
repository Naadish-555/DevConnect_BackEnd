const mongoose = require("mongoose")
const categoriesModel = require("./categories.model")

const projectSchema = new mongoose.Schema({
    id:String,
    categoryIds:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'categoriesModel' }],
    validate: {
      validator: async function (categories) {
        const count = await categoriesModel.countDocuments({ _id: { $in: categories } });
        return count === categories.length; // Ensure all tags exist in the Tag collection
      },
      message: 'One or more categories are invalid.',
    }, 
    },   
    title:String,
    description:String,
    statusID:String
    },{
        timestamps : true
    });

const projectModel = mongoose.model("Projects",projectSchema);
module.exports = projectModel;