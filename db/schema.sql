DROP DATABASE IF EXISTS budget_dev; 
CREATE DATABASE budget_dev; 

\c budget_dev;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    amount DECIMAL(7,2), 
    date DATE, 
    transaction_from TEXT, 
    category TEXT,
    memo TEXT,
    pending BOOLEAN,
    account VARCHAR(40),
    recurring BOOLEAN,
    transaction_id UUID DEFAULT gen_random_uuid()
    );
