const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

mongoose.set("strictQuery", false);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
    res.send("hi");
});

mongoose.connect(process.env.DB_CONNECTION, { }, (err) => {
    err ? console.log("error:", err) : console.log("Connected");
});

app.listen(3000);