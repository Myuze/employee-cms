// Function to create Employee objects based on role
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function parseEmployee(employeeObject) {
  var Employee = null;

  switch(employeeObject.role.toLowerCase()) {
    case 'manager':
      Employee = new Manager(employeeObject.memberName, employeeObject.id, employeeObject.email, employeeObject.officeNum);
      break;

    case 'engineer':
      Employee = new Engineer(employeeObject.memberName, employeeObject.id, employeeObject.email, employeeObject.github);
      break;

    case 'intern':
      Employee = new Intern(employeeObject.memberName, employeeObject.id, employeeObject.email, employeeObject.school);
      break;
      
    default:
      console.log('Unsupported Role Provided.');
  };

  return Employee;
};

module.exports = parseEmployee;
