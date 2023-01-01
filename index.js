//expresss1
const express = require("express"); // express application
require("dotenv").config(); // use the env variables
const mongoose = require("mongoose");
const path = require("path");
const router = require("./src/routes/index.routes"); // used to handle routes
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
//https://expa-server.onrender.com/adminSignin

app.use(cors({
  origin:["https://agile-expa.netlify.app", "https://agile-expa.netlify.app/sign-in"]
}));
app.use(router);
const uri =
  "mongodb+srv://M_Saber:jHokLaTlZQnEbA8C@cluster0.xaphthb.mongodb.net/?retryWrites=true&w=majority";
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB connection successfull");
        app.listen(PORT);
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}
new Database();
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("Error: routes doesn't exist (-_-)");
});
