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
// -- category: string or undefined

module.exports = { checkAmount, checkDate };