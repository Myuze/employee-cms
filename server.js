// Global Requirements
const mysql = require('mysql2');
const { nanoid } = require('nanoid');
const express = require('express');

// Local DB Credentials
const pass = require('./password');

// Environment Variables
const PORT = process.env.PORT || 3001;
const PASS = process.env.DB_PASS || pass;

app = express();
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: PASS,
    database: 'cms_db'
  },
  console.log(`Connected to the cms_db database`)
);

// App Routes
app.get('/departments', (req, res) => {
  db.query('SELECT * FROM department', (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get('/roles', (req, res) => {
  db.query('SELECT * FROM role', (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get('employees', (req, res) => {
  db.query('SELECT * FROM employee', (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get('*', (req, res) => {
  db.query('SELECT * FROM employee', (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
});

