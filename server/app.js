import express from "express";
import dotenv from "dotenv";
import mongoose, { trusted } from "mongoose";
import army from "./routers/army.js";
import Dandd from "./routers/Dandd.js";
import Warhammer from "./routers/Warhammer.js";
import XWing from "./routers/XWing.js";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());

// Request handlers go here
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.use("/army", army);
app.use("/Dandd", Dandd);
app.use("/Warhammer", Warhammer);
app.use("/XWing", XWing);

app.listen(PORT, () =>
  console.log("Ian Williams Capstone Listening on port 4040")
);
