const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const Card = require("./models/cards");
const app = express();
const port = 8000;

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.lnupr.mongodb.net/hackathon?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      }
    );
    console.log("connected DB");
  } catch (err) {
    console.warn(err);
  }
};
connect();

// allow cross-origin requests
app.use(cors());

app.use(express.json());
app.use( '/', routes);
// app.use(body.json);

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

