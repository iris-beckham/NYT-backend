const db = require("../db/dbconfig");

//Index
const getAllPresidents = async () => {
  try {
    const allPresidents = await db.any("SELECT * FROM presidents");
    return allPresidents;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPresidents,
};
