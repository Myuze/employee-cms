// Prompt user Options
const inquirer = require('inquirer');
const processResponse = require('./processResponse');
const prompt = inquirer.createPromptModule();

class Questions {
  constructor () {
    this.response;
    this.promptQueue = [];
    this.questions = [
      {
        type: 'list',
        message: 'Select an Option: ',
        choices: [
          'View All Employees',
          'Update an Employee',
          'Add an Employee',
          'View All Departments',
          'Add a Department',
          'View All Roles',
          'Add a Role',
          'Quit'
        ],
        name: 'task',
        loop: true,
        pageSize: 3
      },  
      {
        type: 'input',
        message: 'What is the name of the Department you want to add: ',
        name: 'addDepartment',
        when: (answers) => answers.task === 'Add a Department'
      },
      {
        type: 'input',
        message: 'Role Name?',
        name: 'roleName',
        when: (answers) => answers.task === 'Add a Role'
      },
      {
        type: 'input',
        message: 'Role Salary?',
        name: 'roleSalary',
        when: (answers) => answers.task === 'Add a Role'
      },
      {
        type: 'input',
        message: 'Role Department?',
        name: 'roleDept',
        when: (answers) => answers.task === 'Add a Role'
      },
      {
        type: 'input',
        message: 'Employee First Name?',
        name: 'firstName',
        when: (answers) => answers.task === 'Add an Employee'
      },
      {
        type: 'input',
        message: 'Employee Last Name?',
        name: 'lastName',
        when: (answers) => answers.task === 'Add an Employee'
      },
      {
        type: 'input',
        message: 'Employee Role?',
        name: 'employeeRole',
        when: (answers) => answers.task === 'Add an Employee'
      },
      {
        type: 'input',
        message: 'Employee Manager?',
        name: 'employeeManager',
        when: (answers) => answers.task === 'Add an Employee'
      },
      {
        type: 'confirm',
        message: 'Would you like to quit? ',
        name: 'quit',
        default: false,
        when: (answers) => answers.task === 'Quit'
      }
    ];
  }

async startQuestions() {
  inquirer.prompt(this.questions).then(async (answers) => {
    console.log(answers)
    if (answers.quit) {
      process.exit(0);
    } else {
      await this.startQuestions();
      processResponse(answers).catch((err) => console.log(err))
    }
  });

    return this.response;
  };

  logResponse() { console.log('Questions response: ', this.response) };
}

module.exports = Questions;
