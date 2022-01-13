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

app.post("/clientlogin", (req, res) => {
  const pbID = req.body.pbetID;
  const pbPass = req.body.pbetPass;

  console.log(pbID);
  console.log(pbPass);

  db.query(
    `SELECT * FROM dbo.pbetLogin where pbetID=${pbID} and pbetPass=${pbPass}`
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  //   db.query(
  //     "SELECT * FROM pbetLogin WHERE pbetID = ? AND pbetPass = ?",
  //     [pbID, pbPass],
  //     (err, result) => {
  //       if (err) {
  //         res.send({ err: err });
  //       }

  //       if (result) {
  //         res.send(result);
  //       } else {
  //         res.send({ message: "Wrong username/password combination" });
  //       }
  //     }
  //   );
});

app.get("/", (req, res) => {});

app.listen(3001, () => {
  console.log("Runing the server on port 3001");
});
