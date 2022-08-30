// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licensesLink = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)',
    Creative_Commons: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-blue.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    Unilicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  return licensesLink[license]
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license ) {
    return 'None';
  } else {
    return renderLicenseBadge(license)
  }
};

function projectInstallation(data){
  if(!data.installation){
    return '';
  }
  else {
    return data.installation
  }
}

function toolsUsed(tools){

  let toolsInfoJs = '';
  let toolsInfoHtml = '';
  let toolsInfoCss = '';
  let toolsInfoVscode = '';
  let toolsInfoNode = '';
  let toolsInfoExpress = '';
  let toolsInfoMysql = '';
  let toolsInfoSequelize = '';
  let toolsInfoPython = '';
  let toolsInfoC = '';

  for (let i = 0; i < tools.length; i++) {
    if (tools[i] === 'JavaScript') {
      toolsInfoJs = `![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
      `; 
    }
    else if (tools[i] === 'HTML') {
      toolsInfoHtml = `![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
      `;
    }
    else if (tools[i] === 'CSS') {
      toolsInfoCss = `![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
      `;
    }
    else if (tools[i] === 'VSCode') {
      toolsInfoVscode = `![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
      `;
    }
    else if (tools[i] === 'Node.js') {
      toolsInfoNode = `![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
      `;
    }
    else if (tools[i] === 'Express') {
      toolsInfoExpress = `![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
      `;
    }
    else if (tools[i] === 'MySQL') {
      toolsInfoMysql = `![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
      `;
    }
    else if (tools[i] === 'Sequelize') {
      toolsInfoSequelize = `![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
      `;
    }
    else if (tools[i] === 'Python') {
      toolsInfoPython = `![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
      `;
    }
    else if (tools[i] === 'C++') {
      toolsInfoC = `![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
      `;
    }
  }
  let allTools = toolsInfoJs + toolsInfoHtml + toolsInfoCss + toolsInfoExpress + toolsInfoMysql + toolsInfoC + toolsInfoNode + toolsInfoPython + toolsInfoSequelize + toolsInfoVscode
  return allTools;
}

function systemsCompatible(systems){

  let compatibleWindows = '';
  let compatibleMac = '';
  let compatibleLinux = '';

  for (let i = 0; i < systems.length; i++) {
    if (systems[i] === 'Windows') {
      compatibleWindows = `![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
      `; 
    }
    else if (systems[i] === 'MacOS') {
      compatibleMac = `![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)
      `;
    }
    else if (systems[i] === 'Linux') {
      compatibleLinux = `![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
      `;
    }
  }
  let allSystems = compatibleWindows + compatibleMac + compatibleLinux
  return allSystems;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseInfo = renderLicenseSection(data.license)
  let installationInfo = projectInstallation(data)
  let toolsInfo = toolsUsed(data.tools)
  let systemsInfo = systemsCompatible(data.systems)

  return `
  [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Roboto+Mono&size=30&pause=2000&color=F7F7F7&width=435&lines=${data.title};By+${data.developer})](https://git.io/typing-svg)
  
  ## Description
  ${data.description}

  ${data.link}

  ![visitors](https://visitor-badge.glitch.me/badge?page_id=${data.username}.${data.title}&left_color=blue&right_color=blue)

  ## Table of contents
  - [Top](#)
  - [Project Description](#Description)
  - [Usage/Installation](#Usage/Installation)
  - [Contributions](#Contributions)
  - [License](#License)
  - [Contact](#Contact)

  ## Made With
  ${toolsInfo}

  ## Compatible With
  ${systemsInfo}

  ## Usage/Installation
  ${installationInfo}

  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## License
  ${licenseInfo}

  ## Contact
  Feel Free to contact me with any further questions to any of the places listed below!

  [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.username})
  [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
