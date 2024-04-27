const express = require("express");
const router = express.Router();
const categoryHandlers = require("../handlers/categories.handler"); 

router.post("/categories",categoryHandlers.createCategory); 
router.get("/categories",categoryHandlers.getCategory);
router.patch("/categories/:categoryId",categoryHandlers.updateCategory);
router.delete("/categories/:categoryId",categoryHandlers.deleteCategory);


module.exports = router;