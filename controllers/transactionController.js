const express = require('express')
const transactions = express.Router()
const { getAllTransactions, getSingleTransaction, deleteTransaction } = require('../queries/transaction.js')

// INDEX
transactions.get('/', async (req, res) => {
    const allTransactions = await getAllTransactions();
    if (allTransactions[0]) {
        res.status(200).json(allTransactions);
    } else {
        res.status(500).json({ error: 'server error' });
    }
});

//SHOW
transactions.get('/:id', async (req, res) => {
    const { id } = req.params;
    const singleTransaction = await getSingleTransaction(id);
    if (singleTransaction) {
        res.status(200).json(singleTransaction);
    } else {
        res.status(500).json({ error: 'server error' });
    }
})

//DELETE
transactions.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTransaction = await deleteTransaction(id);
    if (deletedTransaction.id) {
        res.status(200).json(deletedTransaction);
    } else {
        res.status(404).json('Color not found');
    }
})

module.exports = transactions;