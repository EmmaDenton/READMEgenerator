const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of the project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can other coders contribute to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests can be run on this project? How can they be run?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license is applicable?',
    choices: ['MIT', 'Apache', 'GNU'],
  },
];

const generateReadme = ({
  projectTitle,
  description,
  installation,
  usage,
  contributing,
  tests,
  github,
  email,
  license,
}) => {
  return `
  # ${projectTitle}

  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  [License](#license)
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions
  Any questions? Ask ${github} or email me at ${email}
  
  ## License
  ![](https://img.shields.io/badge/license-${license}-blue.svg)
  `;
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const data = generateReadme(answers);
    writeToFile(fileName, data);
  });
}

init();
