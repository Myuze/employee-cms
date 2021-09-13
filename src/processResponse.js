function processResponse(response) {
  const task = response.task;
  const table = response.table.slice(0, -1).toLowerCase();
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
    case 'Add':
      db.query(`INSERT INTO ${table} ${params} VALUES ?`, (err, result) => {
        console.table(response.table, result);
      });
      break;
    
    case 'View':
      db.query(`SELECT * FROM ${table}`, (err, result) => {
        console.table(response.table, result);
      });
      break;

    default:
      console.log('Not a valid Action');
  }
};

module.exports = processResponse;