// -- validations
// -- amount: Number(), decimals... automatically add .00 if no decimals??
const checkAmount = (req, res, next) => {
    const { amount } = req.body;
    if (amount) {
        if (!Number.isNaN(Number(amount))) {
            // console.log('amount: ', amount);
            next();
        } else
            res.status(400).json({ error: "The amount inputted is not a number" })
    } else {
        res.status(400).json({ error: "An amount is required" })
    }
}
// -- date: date() format, year-month-date, only 12 months-
// update later- will probably make this a date type in the form
const checkDate = (req, res, next) => {
    const { date } = req.body;
    console.log('date: ', date)
    if (date !== "") {
        next();
    } else {
        res.status(400).json({ error: "A date is required" });
    }
}
// -- from: string
const checkSender = (req, res, next) => {
    const { transaction_from } = req.body;
    if (transaction_from && transaction_from !== "") {
        if (typeof transaction_from === 'string' && Number.isNaN(Number(transaction_from))) {
            next();
        } else {
            res.status(400).json({ error: "The sender must be a string." });
        }
    } else {
        res.status(400).json({ error: "A sender is required" });
    }
}
// -- category: string or undefined
const checkCategory = (req, res, next) => {
    const { category } = req.body;
    if (typeof category === "string" || !category) {
        next();
    } else {
        res.status(400).json({ error: "Please make sure you enter a valid category." })
    }
}

module.exports = { checkAmount, checkDate, checkSender, checkCategory };