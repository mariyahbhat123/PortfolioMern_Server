const express = require("express");
const http = require("http");
const PORT = 5000;
const app = express();
const connectMongo = require("../connectionString/connectionString");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
    // "http://localhost:3000",
    // "http://localhost:3006"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", require("../Routes/aboutRoutes"));

app.listen(PORT, () => {
  console.log("Listening to PORT", PORT);
  connectMongo();
});
