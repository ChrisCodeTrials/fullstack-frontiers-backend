-- db/seed.sql
\c mindeasedb

-- Seed data for users
INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
  ('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
  ('user1', '$2b$10$.KcekXylf/3oyrFnnZL2iu6LMQu4GpGQ7IuIxy/vRh30LrlcrA1yi', 'user1@example.com', NOW(), NOW()),
  ('user2', '$2b$10$lfDbcwXFUH6wq9OzTJZI2.37J14/rt.DBq73b98jA9zwEVo3I3DnS', 'user2@example.com', NOW(), NOW()),
  ('user3', '$2b$10$gUB2uL6s7MLOhn.RN.NzLOvDg2cqb2Tw4ukt0aHLBcJwzxOHlvW/6', 'user3@example.com', NOW(), NOW());

-- Seed data for doctors
INSERT INTO doctors (surname, gender, email, specialty)
VALUES 
  ('Dr. Smith', 1, 'dr.smith@example.com', 'Cognitive Behavioral Therapist'),
  ('Dr. Johnson', 1, 'dr.johnson@example.com', 'Family Therapist'),
  ('Dr. Lee', 2, 'dr.lee@example.com', 'Trauma Therapist'),
  ('Dr. Wang', 2, 'dr.wang@example.com', 'Clinical Therapist'),
  ('Dr. Garcia', 1, 'dr.garcia@example.com', 'Addiction Therapist');

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

INSERT INTO quotes (author, quote, category)
VALUES
  ('Albert Einstein', 'Imagination is more important than knowledge.', 'Educational'),
  ('Nelson Mandela', 'Education is the most powerful weapon which you can use to change the world.', 'Educational'),
  ('Malcolm X', 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.', 'Educational'),
  ('Benjamin Franklin', 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 'Educational'),
  ('Maya Angelou', 'Do the best you can until you know better. Then when you know better, do better.', 'Motivational'),
  ('Vince Lombardi', 'The only place success comes before work is in the dictionary.', 'Motivational'),
  ('Jim Rohn', 'Formal education will make you a living; self-education will make you a fortune.', 'Educational'),
  ('Jim Ryun', 'Motivation is what gets you started. Habit is what keeps you going.', 'Motivational'),
  ('Viktor E. Frankl', 'When we are no longer able to change a situation, we are challenged to change ourselves.', 'Motivational'),
  ('William Butler Yeats', 'Education is not the filling of a pail, but the lighting of a fire.', 'Educational');
