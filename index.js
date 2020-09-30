const generateMarkdown = require("./utils/generateMarkdown");

const inq = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        name: "title",
        message: "Project title: ",
        type: "input"
    },
    {
        name: "desc",
        message: "Project description: ",
        type: "input"
    },
    {
        name: "inst",
        message: "Installation instructions: ",
        type: "input"
    },
    {
        name: "usage",
        message: "Usage info: ",
        type: "input"
    },
    {
        name: "contr",
        message: "Contribution guidelines: ",
        type: "input"
    },
    {
        name: "tests",
        message: "Test instructions: ",
        type: "input"
    },
    {
        name: "lic",
        message: "Licence: ",
        type: "list",
        choices: ["some choice", "some other choice"]
    },
    {
        name: "usern",
        message: "GitHub username: ",
        type: "input"
    },
    {
        name: "email",
        message: "Email: ",
        type: "input"
    }
];

// function to write README file
function writeToFile(fileName, text) {
    fs.writeFile(fileName,text,function(err) {
        if(err) return console.log(err);
    })
    console.log("File Written");
}

//temp data
let data = {
    "title":"some Title",
    "desc":"a project",
    "inst":"how to install",
    "usage":"how to use",
    "contr":"How to contribute",
    "tests":"test information",
    "lic":"a license of osme kinmd",
    "usern":"somedude",
    "email":"somedude@dude.com"
}

// function to initialize program
function init() {
    
    const text = generateMarkdown(data);
    writeToFile("output/README.md",text);

    // inq.prompt(questions).then(function(response) {
    //     const text = generateMarkdown(response);
    //     writeToFile("output/README.md",text);
    // })
}

// function call to initialize program
init();
