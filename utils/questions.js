const questions = [
    {
        name: "usern",
        message: "Enter GitHub username: ",
        type: "input"
    },
    {
        name: "title",
        message: "Enter project title",
        type: "input"
    },
    {
        name: "desc",
        message: "Enter a project description",
        type: "input"
    },
    {
        name: "sections",
        message: "Which sections do you want?",
        type: "checkbox",
        choices: ["Installation","Usage","License","Contributing","Tests"]
    },
    {
        name: "inst",
        message: "Enter command to install dependencies",
        type: "input",
        when: answers => answers.sections.indexOf("Installation") >= 0
    },
    {
        name: "usage",
        message: "Enter directions for usage",
        type: "input",
        when: answers => answers.sections.indexOf("Usage") >= 0
    },
    {
        name: "contr",
        message: "Enter contribution guidelines",
        type: "input",
        when: answers => answers.sections.indexOf("Contributing") >= 0
    },
    {
        name: "tests",
        message: "Enter command to run tests: ",
        type: "input",
        when: answers => answers.sections.indexOf("Tests") >= 0
    },
    {
        name: "lic",
        message: "Which license to use?",
        type: "list",
        choices: ["MIT", "GNU GPLv3", "BSD", "Apache"],
        when: answers => answers.sections.indexOf("License") >= 0
    },
    {
        name: "email",
        message: "Enter contact email",
        type: "input",
        validate: input => (/[\w\d]+@[\w\d]+\.[\w\d]+/).test(input) ? true : "Email must be in valid format"
    }
]

module.exports = questions;