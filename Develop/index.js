// TODO: Include packages needed for this application
var fs = require('fs');

const prompt = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
{

    type: "input",
    name: "description",
    message:"What is the description?",
},

{    
    type: "input",
    name: "installation",
    message:"What are the installation instructions?",
},
{
    type: "input",
    name: "usage",
    message:"What is the usage information?",
},
{
    type: "input",
    name: "guidelines",
    message:"What are the contribution guidelines?",
},
{
    type: "input",
    name: "test",   
    message:"What are the test instructions?",
},
{
    type: "list",
    name: "license",   
    message:"What is the license?",
    choices: [
    "apache","MIT","GUN","BSD","LGPL","Mozilla",

    ]
},
{
    type: "input",
    name: "username",     
    message:"What is your GitHub username?",
},
{
    type: "input",
    name: "email",  
    message:"What is your email address?",
},


];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName,questions[0],function(){


    });


}

// TODO: Create a function to initialize app

function init() {
    prompt.prompt(questions)
    .then(answers=>{

        fs.writeFileSync("readme.md",`
# ${answers.title}
## description

${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Guidelines
${answers.guidelines}

## Test
${answers.test}

## License
![badmath](https://img.shields.io/badge/${answers.license}-blue)

## Questions
https://github.com/${answers.username}
you can also reach me at ${answers.email}

        ![license badge](./img/${answers.license}.jpeg)
    `)});

}






// Function call to initialize app
init();

