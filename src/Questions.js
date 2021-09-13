  // Prompt for Team Member data recursively using Inquirer as they confirm to add members
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

class Questions {
  constructor () {
    this.response;
    this.questions = [
      {
        type: 'input',
        message: 'Enter a Team Member name: ',
        name: 'memberName'
      },  
      {
        type: 'input',
        message: 'Enter Employee ID: ',
        name: 'id'
      },  
      {
        type: 'input',
        message: 'Enter Employee Email Address: ',
        name: 'email'
      },  
      {
        type: 'list',
        message: 'Select a Role: ',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
      },
      {
        type: 'input',
        message: 'Enter Office Number: ',
        when: (answers) => answers.role === 'Manager',
        name: 'officeNum'
      },
      {
        type: 'input',
        message: 'Enter Github Username: ',
        when: (answers) => answers.role === 'Engineer',
        name: 'github'
      },
      {
        type: 'input',
        message: 'Enter School Attended: ',
        when: (answers) => answers.role === 'Intern',
        name: 'school'
      },
      {
        type: 'confirm',
        message: 'Would you like to add another Team Member? ',
        name: 'repeat',
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
