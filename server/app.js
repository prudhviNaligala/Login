require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3006;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json("server starts");
});

app.listen(PORT, () => {
  console.log(`Server starting at port No:${PORT}`);
});
