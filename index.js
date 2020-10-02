const generateMarkdown = require("./utils/generateMarkdown");

const inq = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions")



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
    "sections": ["Installation","Usage","License","Contributing","Tests"],
    "inst":"how to install",
    "usage":"how to use",
    "contr":"How to contribute\nanother line",
    "tests":"npm run test",
    "lic":"MIT",
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
