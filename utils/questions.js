const questions = [
    {
        name: "usern",
        message: "GitHub username: ",
        type: "input"
    },
    {
        name: "email",
        message: "Contact email: ",
        type: "input",
        validate: input => (/[\w\d]+@[\w\d]+\.[\w\d]+/).test(input) ? true : "Email must be in valid format"
    },
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
        name: "sections",
        message: "Which sections do you want?",
        type: "checkbox",
        choices: ["Installation","Usage","License","Contributing","Tests"]
    },
    {
        name: "inst",
        message: "Installation instructions: ",
        type: "input",
        when: answers => answers.sections.indexOf("Installation") >= 0
    },
    {
        name: "usage",
        message: "Usage info: ",
        type: "input",
        when: answers => answers.sections.indexOf("Usage") >= 0
    },
    {
        name: "contr",
        message: "Contribution guidelines: ",
        type: "input",
        when: answers => answers.sections.indexOf("Contributing") >= 0
    },
    {
        name: "tests",
        message: "Test instructions: ",
        type: "input",
        when: answers => answers.sections.indexOf("Tests") >= 0
    },
    {
        name: "lic",
        message: "Licence: ",
        type: "list",
        choices: ["MIT", "GNU GPLv3", "ISC", "Apache License 2.0"],
        when: answers => answers.sections.indexOf("License") >= 0
    }
]

module.exports = questions;