require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const server = require("http").Server(app);

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-81scl.mongodb.net/omnistack`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(process.env.PORT || 3333);
