const mysql = require('mysql2');

// Local DB Credentials
const pass = require('../password');

// Environment Variables
const PASS = process.env.DB_PASS || pass;

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: PASS,
    database: 'cms_db'
  },
  console.log(`\nConnected to the cms_db database`)
);

async function processResponse(response) {
  console.log('response: ', response);
  const task = response.task.toLowerCase().split(' ').shift();
  let table = response.task.toLowerCase().split(' ').pop();

  if (table.endsWith('s')) table = table.slice(0, -1);

  let params = ``;
  const employee = '(id, first_name, last_name, role_id, manager_id)';
  const department = '(id, name)';
  const role = '(id, title, salary, department_id)';

  switch (table) {
    case 'employee':
      params = employee;
      break;

    case 'department':
      params = department;
      break;
    
    case 'role':
      params = role;
      break;
  };

  switch (task) {
    case 'add':
      db.query(`INSERT INTO ${table} ${params} VALUES ?`, response, (err, result) => {
        console.table('\n', response.table, result);
      });
      break;
      
    case 'view':
      db.query(`SELECT * FROM ${table}`, (err, result) => {
        console.table('\n', response.table, result);
      });
      break;

    default:
      console.log('Not a valid Action');
  }
  console.log('Press Enter to Continue')
  return;
};

// // DB Queries
// db.query('SELECT * FROM department', (err, result) => {
//   console.log(result);
//   res.json(result);
// });


// db.query('SELECT * FROM role', (err, result) => {
//   console.log(result);
//   res.json(result);
// });

// db.query('SELECT * FROM employee', (err, result) => {
//   console.log(result);
//   res.json(result);
// });

// db.query('SELECT * FROM employee', (err, result) => {
//   console.log(result);
//   res.json(result);
// });

module.exports = processResponse;