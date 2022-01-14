var pbetUsers = require("./pbetUser");
const dboperations = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const { response } = require("express");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/clientlogin", (req, res) => {
  const pbID = req.body.pbetID;
  const pbPass = req.body.pbetPass;

  console.log(pbID);
  console.log(pbPass);

  dboperations.getPbetUser(pbID, pbPass).then((res) => {
    console.log("Results: ");
    console.log(res);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("USER API Running @: " + port);
