const {writeFileSync, mkdirSync} = require('fs');

require('dotenv').config();

const targetPath = `./src/environments/environment.ts`;

const envFileContent = `
  export const environment = {
    api_key_giphy: "${process.env['API_KEY_GIPHY']}",

  };

`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync(targetPath, envFileContent);
