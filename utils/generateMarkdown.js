// function to generate markdown for README
function generateMarkdown(data) {
  const title = `# ${data.title}\n`;
  const badge = data.sections.indexOf("License") != -1 ? `![license badge](https://img.shields.io/badge/license-${encodeURI(data.lic)}-green)\n\n` : "";
  const head = `## Description\n\n${data.desc}\n\n`;
  const foot = `## Questions\nhttps://github.com/${data.usern}\n\n${data.email}`;

  return title+badge+head+makeToC(data.sections)+createSections(data)+foot;
}

// creates table of contents
const makeToC = sections => {
  let toc = `## Table of Contents\n`;
  let i = 1;
  for (const s of sections) {
    toc += `${i++}. [${s}](#${s})\n`
  }
  toc += `${i}. [Questions](#Questions)\n\n`;
  return toc;
}

// creates sections of readme
const createSections = (responses) => {
  let text = "";
  for (const s of responses.sections) {
    switch (s) {
      case "Installation":
        text += `## Installation\nTo install dependencies run the following command:\n\`\`\`\n${responses.inst}\n\`\`\`\n\n`;
        break;
      case "Usage":
        text += `## Usage\n${responses.usage}\n\n`;
        break;
      case "License":
        text += `## License\nThis project is licensed under the ${responses.lic} license\n\n`;
        break;
      case "Contributing":
        text += `## Contributing\n${responses.contr}\n\n`;
        break;
      case "Tests":
        text += `## Tests\nTo run tests execute the following command:\n\`\`\`\n${responses.tests}\n\`\`\`\n\n`;
        break;
      default:
    }
  }
  return text;
}
module.exports = generateMarkdown;
