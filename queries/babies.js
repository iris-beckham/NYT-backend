const db = require("../db/dbconfig");

//Index
const getBabyNames = async (year) => {
  try {
    const babyNames = await db.any(
      "SELECT * FROM PopularBabyNames WHERE year=$1",
      year
    );
    return babyNames;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getBabyNames,
};
