const express = require("express");

const { connection } = require("./db");
const { taskRouter } = require("./Routes/Task.route");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log(`connected to the port ${process.env.port}`);
});
