\c budget_dev; 


-- Create your seedfiles here using SQL -  INSERT INTO() VALUES()

INSERT INTO transactions ( amount, date, transaction_from, category, memo, pending, account, recurring) 
VALUES 
( '3000.00', '2024-03-20', 'Employer', 'Income', 'good job', 'false', 'USAA Savings', 'true'),
('-1300.00','2024-03-17', 'Landlord', 'Rent', '', 'false', 'Chase', 'false'),
('-50.00', '2024-03-19', 'Restaurant', 'Entertainment', 'Lobster dinner', 'true', 'Amex', 'false');

SELECT * FROM transactions;
