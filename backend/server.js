const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://Matthew:godzilla@kaijudatabase.7ecor.mongodb.net/kaiju?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const godzillaCloneRouter = require("./routes/godzillaClones");

app.use("/godzilla-clones", godzillaCloneRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
