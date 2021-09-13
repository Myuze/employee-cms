// Global Requirements
const mysql = require('mysql2');
const cTable = require('console.table');
const Questions = require('./src/Questions');

// Local DB Credentials
const pass = require('./password');

// Environment Variables
const PASS = process.env.DB_PASS || pass;

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: PASS,
    database: 'cms_db'
  },
  console.log(`Connected to the cms_db database`)
);

const prompt = new Questions();

prompt.getResponse();

// DB Queries
db.query('SELECT * FROM department', (err, result) => {
  console.log(result);
  res.json(result);
});


db.query('SELECT * FROM role', (err, result) => {
  console.log(result);
  res.json(result);
});

db.query('SELECT * FROM employee', (err, result) => {
  console.log(result);
  res.json(result);
});

db.query('SELECT * FROM employee', (err, result) => {
  console.log(result);
  res.json(result);
});
