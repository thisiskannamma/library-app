const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksRoute = require("./Routes/BookRoute");
const MembersRoute=require("./Routes/memberRoute")
require("dotenv").config();

const app = express();

app.use(bodyParser.json()); //middleware
const cors=require("cors");
app.use(cors())

//Connect to MongoDB
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use("/api/books", booksRoute);
app.use("/api/teachers", MembersRoute);
// app.use(express.static("public"));

// Start the server
// const port = 3000;
app.listen(process.env.PORT, () => console.log("Listening on port 8080 ..."));
