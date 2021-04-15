
const clear = require('clear');
const figlet = require('figlet')
const files = require('./lib/files')
const chalk = require('chalk');
const { askGithubCredentials } = require('./lib/inquirer');

clear()
console.log(chalk.red(figlet.textSync(files.getCurrentDirectoryBase() , {horizontalLayout : 'full'})));

const run = async ()=>{
    const credentials = await askGithubCredentials()
    console.log(credentials)
}

run()