const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3050;
const Thread = require("./models/Thread")

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb+srv://sillyss5021:shinsukeshijo1@cluster0.7zurux9.mongodb.net/threads?retryWrites=true&w=majority").then(() => console.log("db connected")).catch((err) => console.log(err))

// getメソッド
app.get("/api/v1/thereads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err)
  }
});

// postメソッド

app.post("/api/v1/theread", async (req, res) => {
  try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err)
  }
});

app.listen(PORT, console.log("server running"));