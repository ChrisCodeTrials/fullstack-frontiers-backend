-- db/seed.sql
\c mindeasedb

-- Seed data for users
INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
  ('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
  ('user1', 'password_hash_1', 'user1@example.com', NOW(), NOW()),
  ('user2', 'password_hash_2', 'user2@example.com', NOW(), NOW()),
  ('user3', 'password_hash_3', 'user3@example.com', NOW(), NOW());

-- Seed data for doctors
INSERT INTO doctors (surname, gender, email, specialty)
VALUES 
  ('Dr. Smith', 1, 'dr.smith@example.com', 1),
  ('Dr. Johnson', 1, 'dr.johnson@example.com', 2),
  ('Dr. Lee', 2, 'dr.lee@example.com', 1),
  ('Dr. Wang', 2, 'dr.wang@example.com', 3),
  ('Dr. Garcia', 1, 'dr.garcia@example.com', 2);

-- Seed data for appointments
INSERT INTO appointments (appt_date, created_at, appt_reason, duration, location, is_taken)
VALUES 
  ('2024-03-23', '2024-03-21', 'Cognitive Behavioral Therapy', '30 minutes', 'Manhattan', false),
  ('2024-03-25', '2024-03-22', 'Psychoanalysis Session', '45 minutes', 'Brooklyn', false),
  ('2024-03-26', '2024-03-22', 'Mindfulness Therapy', '20 minutes', 'Queens', false),
  ('2024-03-28', '2024-03-23', 'Family Therapy', '60 minutes', 'Bronx', false),
  ('2024-03-30', '2024-03-24', 'Group Therapy', '40 minutes', 'Staten Island', false),
  ('2024-03-31', '2024-03-25', 'Art Therapy', '30 minutes', 'Manhattan', false),
  ('2024-04-02', '2024-03-26', 'Interpersonal Therapy', '45 minutes', 'Brooklyn', false),
  ('2024-04-03', '2024-03-27', 'Play Therapy', '50 minutes', 'Queens', false),
  ('2024-04-05', '2024-03-28', 'Existential Therapy', '40 minutes', 'Bronx', false),
  ('2024-04-06', '2024-03-29', 'Dialectical Behavior Therapy', '60 minutes', 'Staten Island', false);