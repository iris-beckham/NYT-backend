\c budget_dev; 


-- Create your seedfiles here using SQL -  INSERT INTO() VALUES()

INSERT INTO transactions ( amount, date, transaction_from, category) 
VALUES 
( '3000.00', '2024-03-20', 'Employer', 'Income'),
('-1300.00','2024-03-17', 'Landlord', 'Rent'),
('-50.00', '2024-03-19', 'Restaurant', 'Entertainment');