\c budget_dev; 


-- Create your seedfiles here using SQL -  INSERT INTO() VALUES()

INSERT INTO transactions ( amount, date, transaction_from, category, memo, pending, account, recurring) 
VALUES 
( 3000.00, '2024-03-20', 'Employer', 'Income', 'good job', false, 'USAA Savings', true),
(-1300.00,'2024-03-17', 'Landlord', 'Rent', '', false, 'Chase', false),
(-50.00, '2024-03-19', 'Restaurant', 'Entertainment', 'Lobster dinner', true, 'Amex', false),
(1500.00, '2024-03-25', 'Freelance Client', 'Income', 'Website development project', false, 'PayPal', false),
(-75.00, '2024-03-22', 'Trader Joes', 'Groceries', '', false, 'USAA Checking Account', false),
(-200.00, '2024-03-21', 'Electric Company', 'Utilities', 'Electricity bill', true, 'Amex', false),
(-25.50, '2024-03-26', 'Sweet Treat Bakery', 'Groceries', 'Birthday Cake', false, 'Chase', false),
(-150.00, '2024-03-28', 'Water Company', 'Utilities', '', false, 'Amex', false),
(-65.00, '2024-03-30', 'Internet Service Provider', 'Utilities', '', false, 'Amex', false),
(-50.00, '2024-03-31', 'Gas Company', 'Utilities', 'Natural gas bill', true, 'Chase', false)
;


