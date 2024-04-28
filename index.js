require("dotenv").config() //header file
require("./connectors/mongo.connector")
const express = require("express");
const projectRouter =require("./routes/project.routes");
const projectCommentRouter =require("./routes/project.comment");
const categoryRouter = require("./routes/categories.routes");
const userRouter = require("./routes/user.route");
const inviteRouter = require("./routes/invites.routes");

console.log(process.env.MONGO_CONNECTION_STRING);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api",projectRouter);  
app.use("/api",projectCommentRouter);
app.use("/api",categoryRouter)
app.use("/api",userRouter);
app.use("/api",inviteRouter);

//start the sever
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });