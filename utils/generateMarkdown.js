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
    return '';
  } else {
    return renderLicenseBadge(license)
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseInfo = renderLicenseSection(data.license)
  return `
  # ${data.title}

  ## Table of contents
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [License](#License)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## License
  ${licenseInfo}

  ## GitHub Link
  [Profile](https://github.com/${data.username})

  ## Email
  [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
