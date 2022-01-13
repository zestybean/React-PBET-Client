var config = require("./dbconfig");
const sql = require("mssql/msnodesqlv8");

async function getPbetUsers() {
  try {
    var pool = await sql.connect(config);
    var pbetUsers = await pool.request().query(`select * from pbetLogin`);

    return pbetUsers.recordsets;
  } catch {
    (error) => {
      console.log(error);
    };
  }
}

async function getPbetUser(pbetID, pbetPass) {
  try {
    var pool = await sql.connect(config);
    var pbetUser = await pool
      .request()
      .input("pbetID", sql.VarChar, pbetID)
      .input("pbetPass", sql.VarChar, pbetPass)
      .query(
        "select * from pbetLogin where pbetID = @pbetId and pbetPass = @pbetPass"
      );

    return pbetUser.recordsets;
  } catch {
    (error) => {
      console.log(error);
    };
  }
}

module.exports = {
  getPbetUsers: getPbetUsers,
  getPbetUser: getPbetUser,
};
