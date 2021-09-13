// Prompt user Options
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

class Questions {
  constructor () {
    this.response;
    this.questions = [
      {
        type: 'list',
        message: 'Select an Option: ',
        choices: [
          'View',
          'Add',
          'Update'
        ],
        name: 'task'
      },  
      {
        type: 'list',
        message: 'What do you want to view: ',
        choices: [
          'Employees',
          'Departments',
          'Roles',
        ],
        name: 'view',
        when: (answers) => answers.task === 'View'
      },  
      {
        type: 'list',
        message: 'What do you want to add: ',
        choices: [
          'Employee',
          'Department',
          'Role'
        ],
        name: 'add',
        when: (answers) => answers.task === 'Add'
      },  
      {
        type: 'list',
        message: 'What do you want to update: ',
        choices: [
          'Employee',
          'Department',
          'Role'
        ],
        name: 'update',
        when: (answers) => answers.task === 'Update'
      },  
      {
        type: 'confirm',
        message: 'Would you like to quit? ',
        name: 'quit',
        default: false
      }
    ];
  }

  #collectInputs = async (inputs = []) => {
    const { repeat, ...answers } = await prompt(this.questions);
    const newInputs = [...inputs, answers];
    return repeat ? this.#collectInputs(newInputs) : newInputs;
  };

  async getResponse() {
    this.response = await this.#collectInputs();
    return this.response;
  };

  logResponse() { console.log('Questions response: ', this.response) };
}

module.exports = Questions;
