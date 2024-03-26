const express = require('express')
const transactions = express.Router()
const { getAllTransactions, getSingleTransaction, deleteTransaction, createTransaction, updateTransaction } = require('../queries/transaction.js')
const { checkAmount, checkDate, checkSender, checkCategory } = require('../validations/checkTransactions.js')

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
        res.status(404).json('Transaction not found');
    }
})

//CREATE
transactions.post('/', checkAmount, checkDate, checkSender, checkCategory, async (req, res) => {
    try {
        const createdTransaction = await createTransaction(req.body);
        res.status(200).json(createdTransaction);
    } catch (error) {
        res.status(400).json({ error });
    }
})

//UPDATE
transactions.put('/:id', checkAmount, checkDate, checkSender, checkCategory, async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTransaction = await updateTransaction(id, req.body);
        res.status(200).json(updatedTransaction);
    } catch {
        res.status(400).json({ error });
    }

})
module.exports = transactions;
