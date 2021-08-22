module.exports = (title, description, installation, usage, licenses, contribute, test, creator, github, email) => {
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