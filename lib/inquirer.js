const inquirer = require('inquirer')

module.exports = {
    askGithubCredentials : ()=>{
        const questions = [
            {
                type : 'input',
                name : 'username',
                message : 'Enter your username',
                validate : (value)=>{
                     if(value.length){
                         return true
                     }else{
                         return "You must provide username"
                     }
                }
            },
            {
                type : 'password',
                name : 'password',
                message : 'Enter your password',
                validate : (value)=>{
                     if(value.length){
                         return true
                     }else{
                         return "You must provide password"
                     }
                }
            }
        ]
        
        return inquirer.prompt(questions)
        //.then(answer=> console.log(answer))
    }
}