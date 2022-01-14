const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("mssql/msnodesqlv8");
const cors = require("cors");

// const db = new sql.ConnectionPool({
//   database: "PBET_TEST",
//   server: "samtah\\sqlexpress",
//   driver: "msnodesqlv8",
//   options: {
//     trustedConnection: true,
//   },
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect().then(() => {
  console.log("Connected to PBET_TEST");
});

app.get("/", (req, res) => {});

app.listen(3001, () => {
  console.log("Runing the server on port 3001");
});
