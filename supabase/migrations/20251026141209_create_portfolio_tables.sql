/*
  # Portfolio Website Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `image_url` (text) - Project image URL
      - `tech_stack` (text array) - Technologies used
      - `github_url` (text, optional) - GitHub repository link
      - `live_url` (text, optional) - Live demo link
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Creation timestamp
      
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Sender's name
      - `email` (text) - Sender's email
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp
      - `read` (boolean) - Whether the message has been read
      
  2. Security
    - Enable RLS on both tables
    - Projects are publicly readable
    - Contact submissions are publicly insertable (for form submissions)
    - Only authenticated users can read contact submissions
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  tech_stack text[] NOT NULL DEFAULT '{}',
  github_url text,
  live_url text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Projects policies (publicly readable)
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Contact submissions policies
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, tech_stack, github_url, live_url, order_index)
VALUES 
  (
    'E-Commerce Platform',
    'A full-featured e-commerce platform with payment integration, product management, and user authentication.',
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'Node.js', 'MongoDB', 'Stripe'],
    'https://github.com',
    'https://example.com',
    1
  ),
  (
    'Task Management App',
    'Collaborative task management application with real-time updates, team features, and analytics dashboard.',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['React', 'Express', 'PostgreSQL', 'Socket.io'],
    'https://github.com',
    'https://example.com',
    2
  ),
  (
    'Social Media Dashboard',
    'Analytics dashboard for managing multiple social media accounts with scheduling and performance tracking.',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['Vue.js', 'Python', 'FastAPI', 'Redis'],
    'https://github.com',
    'https://example.com',
    3
  ),
  (
    'AI Content Generator',
    'AI-powered content generation tool with multiple templates, language support, and export options.',
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    ARRAY['Next.js', 'OpenAI', 'Tailwind', 'Prisma'],
    'https://github.com',
    'https://example.com',
    4
  );