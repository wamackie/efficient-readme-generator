const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const createReadMe = util.promisify(fs.writeFile);

const logData = () => inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write the project description:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What should be typed to install dependencies?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What goes in the usage section?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license does your project use?',
        choices: ['x', 'y', 'z'],
        validate: licenseChoice => {
            if (licenseChoice) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What goes in the contribute section?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please enter contribution instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What should be typed to run tests?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter testing instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Who created this? (first and last name)',
        validate: creatorInput => {
            if (creatorInput) {
                return true;
            } else {
                console.log('Please enter who created this!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the associated GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can be used to contact you?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;
            }
        }
    }
    ])

function writeData (data) {
    return `# ${data.title}
${data.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
Console command to install dependencies:
${data.installation}
    
## Usage:
${data.usage}
    
## License:
${data.licenses}
    
## Contributing:
${data.contribute}
    
## Tests:
${data.test}
    
## Contact:
This project was created by ${data.creator}. Feel free to contact me at https://github.com/${data.github} or by email at ${data.email}.
`
}

logData()
    .then((data) => createReadMe ('README.md',
    writeData(data)))
        .then(() => console.log('Created README.md'));