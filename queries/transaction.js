const db = require('../db/dbconfig');

const getAllTransactions = async () => {
    try {
        const allTransactions = await db.any('SELECT * FROM transactions;');
        return allTransactions;
    } catch (error) {
        return error
    }
};

const getSingleTransaction = async (id) => {
    try {
        const transaction = await db.one('SELECT * FROM transactions WHERE id = $1', id);
        //sql injection
        return transaction;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllTransactions, getSingleTransaction };