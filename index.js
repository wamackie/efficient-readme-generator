const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme_template')

const data = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write the project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What should be typed to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instruct others how to use your project:'
    },
    {
        type: 'input',
        name: 'licenses',
        message: 'What license does your project use?',
        choices: ['x', 'y', 'z']
    },
    {
        type: 'input',
        name: 'contribute',
        message: ''
    },
    {
        type: 'input',
        name: 'test',
        message: 'What should be typed to run tests?'
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Who created this?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the associated GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can be used to contact you?'
    }
    ])
}