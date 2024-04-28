const mongoose = require("mongoose")
const categoriesModel = require("./categories.model")

const projectSchema = new mongoose.Schema({
    categoryIds:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'categories' }],
        validate: {
        validator: async function (categories) {
            const count = await categoriesModel.countDocuments({ _id: { $in: categories } });
            return count === categories.length; // Ensure all tags exist in the Tag collection
        },
        message: 'One or more categories are invalid.',
        }, 
    },   
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ownerId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Users' , required: true 
    },
    collaboratorIds:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
    }
},{
    timestamps : true
});

const projectModel = mongoose.model("Projects",projectSchema);
module.exports = projectModel;