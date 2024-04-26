require("dotenv").config() //header file
require("./connectors/mongo.connector")
const express = require("express");
const projectRouter =require("./routes/project.routes");

console.log(process.env.MONGO_CONNECTION_STRING);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api",projectRouter);  
//start the sever
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });