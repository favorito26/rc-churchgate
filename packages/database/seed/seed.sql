-- Sample seed data for testing member display in the DataTable
-- Run with: npx wrangler d1 execute DB --local --file seed/seed.sql
-- (from the apps/api directory)
--
-- TEST LOGIN CREDENTIALS: password for all users below is: password123
--
-- bcrypt hash for "password123" (cost 12):
-- $2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG

-- Insert 10 sample users (members table requires a user_id FK)
INSERT OR IGNORE INTO users (email, password_hash, role, status, created_at, updated_at) VALUES
    ('alice.williams@churchgate.test', '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('bob.johnson@churchgate.test',  '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('carol.smith@churchgate.test',   '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('david.brown@churchgate.test',   '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('emma.davis@churchgate.test',    '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('frank.miller@churchgate.test',  '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('grace.wilson@churchgate.test',  '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('henry.taylor@churchgate.test',  '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('iris.anderson@churchgate.test', '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600),
    ('jack.thomas@churchgate.test',   '$2b$12$ADomen7fM20pMGhIMIwgc.hhAGElusxRSJM4wThrE1OYLndw4Z6xG', 'member', 'active', 1785417600, 1785417600);

-- Insert 10 sample members linked to the users above
INSERT OR IGNORE INTO members (
    user_id,
    first_name,
    last_name,
    phone,
    gender,
    dob,
    profession,
    bio,
    joined_at,
    created_at,
    updated_at
) VALUES
    (2,  'Alice',   'Williams',  '(555) 0102', 'female', 883833600, 'Architect',     'Enthusiastic Rotary Club member passionate about community service.', 1785331200, 1785417600, 1785417600),
    (3,  'Bob',     'Johnson',   '(555) 0103', 'male',   788918400, 'Teacher',       'Dedicated educator volunteering for local causes.',                   1785331200, 1785417600, 1785417600),
    (4,  'Carol',   'Smith',     '(555) 0104', 'female', 705676800, 'Engineer',      'Building solutions for a better tomorrow.',                        1785331200, 1785417600, 1785417600),
    (5,  'David',   'Brown',     '(555) 0105', 'male',   666451200, 'Doctor',        'Medical professional supporting community health initiatives.',      1785331200, 1785417600, 1785417600),
    (6,  'Emma',    'Davis',     '(555) 0106', 'female', 735782400, 'Lawyer',        'Advocating for justice and community improvement.',               1785331200, 1785417600, 1785417600),
    (7,  'Frank',   'Miller',    '(555) 0107', 'male',   607824000, 'Designer',      'Creative mind driving visual storytelling.',                     1785331200, 1785417600, 1785417600),
    (8,  'Grace',   'Wilson',    '(555) 0108', 'female', 694761600, 'Writer',        'Storyteller committed to uplifting voices.',                       1785331200, 1785417600, 1785417600),
    (9,  'Henry',   'Taylor',    '(555) 0109', 'male',   631728000, 'Accountant',    'Financial stewardship for nonprofit organizations.',               1785331200, 1785417600, 1785417600),
    (10, 'Iris',    'Anderson',  '(555) 0110', 'female', 755366400, 'Photographer',  'Capturing moments that matter.',                                   1785331200, 1785417600, 1785417600),
    (1, 'Jack',    'Thomas',    '(555) 0111', 'male',   684345600, 'Musician',      'Bringing joy through music to the community.',                     1785331200, 1785417600, 1785417600);
