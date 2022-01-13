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
app.use("/api", router);

router.use((request, response, next) => {
  console.log("Middleware");
  //next();
});

router.route("/clientlogin").get((request, response) => {
  dboperations.getPbetUsers().then((res) => {
    console.log("Server results:");
    console.log(res);
  });
});

router.route("/clientlogin/:pbetID:pbetPass").get((request, response) => {
  dboperations.getPbetUser(request.params.pbetID).then((res) => {
    console.log("Server results:");
    console.log(res);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("USER API Running @: " + port);
