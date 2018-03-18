CREATE TABLE userpage(
  id SERIAL PRIMARY KEY,
  guest_name TEXT,
  communication DOUBLE PRECISION,
  cleaniness DOUBLE PRECISION,
  location DOUBLE PRECISION,
  checkin DOUBLE PRECISION,
  accuracy DOUBLE PRECISION,
  message TEXT,
  date TEXT,
  image TEXT,
  value DOUBLE PRECISION
);