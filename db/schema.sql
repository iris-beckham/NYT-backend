DROP DATABASE IF EXISTS budget_dev; 
CREATE DATABASE budget_dev; 

\c budget_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    amount DECIMAL(7,2), 
    date DATE, 
    transaction_from TEXT, 
    category TEXT
    );

-- SELECT * FROM transactions;
