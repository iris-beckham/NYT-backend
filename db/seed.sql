\c budget_dev; 


-- Create your seedfiles here using SQL -  INSERT INTO() VALUES()

INSERT INTO transactions (id, amount, date, transaction_from, category) 
VALUES 
('1', '3000.00', '2024-03-20', 'Employer', 'Income'),
('2', '-1300.00','2024-03-17', 'Landlord', 'Rent'),
('3', '-50.00', '2024-03-19', 'Restaurant', 'Entertainment');

-- SELECT * FROM transactions;