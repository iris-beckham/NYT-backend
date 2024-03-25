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

const deleteTransaction = async (id) => {
    try {
        const deletedTransaction = await db.one('DELETE FROM transactions WHERE id = $1 RETURNING *', id)
        return deletedTransaction;
    } catch (error) {
        return error;
    }
}

const createTransaction = async (transaction) => {
    try {
        const { amount, date, transaction_from, category } = transaction;
        const newTransaction = await db.one('INSERT INTO transactions (amount, date, transaction_from, category) VALUES($1,$2,$3,$4) RETURNING *', [amount, date, transaction_from, category]);
        return newTransaction;
    } catch (error) {
        return error;
    }
}

const updateTransaction = async (id, transaction) => {
    try {
        const updatedTransaction = await db.one('UPDATE transactions SET amount=$1, date=$2, transaction_from=$3, category=$4 where id=$5 RETURNING *', [transaction.amount, transaction.date, transaction.transaction_from, transaction.category, id]);
        return updatedTransaction;
    } catch (error) {
        return error;
    }
}


module.exports = { getAllTransactions, getSingleTransaction, deleteTransaction, createTransaction, updateTransaction };