const fs = require('fs');
const inquirer = require('inquirer');

const data = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'creator',
        message: 'Who created this?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is the associated GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can be used to contact you?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
    },
    ])
}