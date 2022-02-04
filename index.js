console.log("Paxzu is running");

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

// 1) ---------------------- Project CRUD PAXZU
app.use("/crud", require("./routes/CRUD"));

const host = "0.0.0.0";
app.listen(process.env.PORT || 5500, () => {
  console.log("App listening on port 5500!");
});

// app.listen(3555, () => {
//   console.log("App listening on port 3555!");
// });
// app.listen(process.env.PORT || 5000);
