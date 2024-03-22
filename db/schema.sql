-- db/schema.sql
DROP DATABASE IF EXISTS mindeasedb;

CREATE DATABASE mindeasedb;


\c mindeasedb

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    first_visit boolean,
    gender VARCHAR,
    dob VARCHAR,
    preferred_name VARCHAR,
    surname VARCHAR,
    appt_id integer
);

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  appt_date date,
  created_at date,
  appt_reason VARCHAR,
  duration timestamp,
  location VARCHAR,
  is_taken boolean
);

DROP TABLE IF EXISTS doctors;

CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  surname VARCHAR(20),
  gender integer,
  email VARCHAR(30),
  specialty integer,
  appt_id integer
);

