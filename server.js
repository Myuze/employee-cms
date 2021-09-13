// Global Requirements
const mysql = require('mysql2');
const { nanoid } = require('nanoid');
const express = require('express');

const PORT = process.env.PORT || 3001;

app = express();
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'NiziU_Nina760529$',
    database: 'cms_db'
  },
  console.log(`Connected to the cms_db database`)
);

// App Routes
app.get('*', (req, res) => {
  db.query('SELECT * FROM employee', (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
});

