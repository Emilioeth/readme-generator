// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a project description.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should your project be used?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Did you use a license?',
        default: false
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
        choices: ['MIT', 'Creative_Commons', 'Unilicense'],
        when: ({ confirmLicense }) => confirmLicense
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
      ])
      .then((response) => {
        let answers = generateMarkdown(response);
        writeToFile('./dist/README.md', answers)
      })
      .catch((error) => {
        console.log(error)
      })
  };

// TODO: Create a function to write README file
function writeToFile(fileInf, fileContent) {
  fs.writeFileSync(fileInf, fileContent, err => {
    if (err) {
      rejects(err);
      return;
    }
    resolve({
      ok: true,
      message: 'File Created!'
    })
  });
};

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();

