DROP DATABASE IF EXISTS teamtwo; -- change name of db
CREATE DATABASE teamtwo; -- change name of db

\c teamtwo

CREATE TABLE presidents (id SERIAL PRIMARY KEY, pres_name VARCHAR(100) NOT NULL, term_start DATE NOT NULL, term_end DATE NOT NULL, terms NUMERIC NOT NULL, party VARCHAR(100), image VARCHAR(255));

CREATE TABLE PopularBabyNames (
    Year INT NOT NULL,
    Gender VARCHAR(10) NOT NULL,
    Name VARCHAR(50) NOT NULL,
    PRIMARY KEY (Year, Gender)
);