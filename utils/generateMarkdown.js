// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  
  ${data.desc}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  
  ${data.inst}

  ## Usage
  
  ${data.usage}

  ## License
  
  ${data.lic}

  ## Contributing

  ${data.contr}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  
  https://github.com/${data.usern}
  ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  