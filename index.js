const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

const inq = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile =  util.promisify(fs.writeFile);

// function to initialize program
function init() {
    inq.prompt(questions).then(function(response) {
        return writeFile(`output/README_${Date.now()}.md`,generateMarkdown(response));
    });
}

// function call to initialize program
init();
