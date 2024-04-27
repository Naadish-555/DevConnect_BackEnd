require("dotenv").config() //header file
require("./connectors/mongo.connector")
const express = require("express");
const projectRouter =require("./routes/project.routes");
const projectCommentRouter =require("./routes/project.comment");
const categoryRouter = require("./routes/categories.routes");

console.log(process.env.MONGO_CONNECTION_STRING);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api",projectRouter);  
app.use("/api",projectCommentRouter);
app.use("/api",categoryRouter)
//start the sever
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });