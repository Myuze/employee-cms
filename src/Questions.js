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
          'Update',
          'Quit'
        ],
        name: 'task',
        askAnswered: true
      },  
      {
        type: 'list',
        message: 'Choose: ',
        choices: [
          'Employees',
          'Departments',
          'Roles',
          
        ],
        name: 'table',
        askAnswered: true,
        when: (answers) => answers.task === 'View' || answers.task === 'Add'
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
        askAnswered: true,
        when: (answers) => answers.task === 'Update'
      },  
      {
        type: 'confirm',
        message: 'Would you like to quit? ',
        name: 'quit',
        default: false,
        askAnswered: true,
        when: (answers) => answers.task === 'Quit'
      }
    ];
  }

  #collectInputs = async (inputs = []) => {
    const { quit, ...answers } = await prompt(this.questions);
    const newInputs = [...inputs, answers];
    return quit ? this.#collectInputs(newInputs) : newInputs;
  };

  async startQuestions() {
    this.response = await this.#collectInputs();
    console.log('this.response: ', this.response);

    return this.response;
  };

  logResponse() { console.log('Questions response: ', this.response) };
}

module.exports = Questions;
