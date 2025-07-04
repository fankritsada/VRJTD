// index.js

const fs = require('fs');
const path = require('path');

function createFolder(folderName, basePath = process.cwd()) {
  const folderPath = path.join(basePath, folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Folder created at: ${folderPath}`);
  } else {
    console.log(`Folder already exists at: ${folderPath}`);
  }
}

module.exports = {
  createFolder
};
