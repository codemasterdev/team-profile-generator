const inquirer = require('inquirer');
const emailValidator = require('node-email-validation');

module.exports =
   managerPrompt = () => {
      return inquirer
         .prompt([
            {
               type: 'input',
               name: 'name',
               message: `Hello! It's time to build your team. Let's begin with who's in charge -- what's the name of your manager?`,
               validate: nameInput => {
                  if (!nameInput) {
                     console.log(`Surely, your manager's name isn't an empty space. We'll need a name.`);
                     return false;
                  }
                  return true;
               }
            },
            {
               type: 'input',
               name: 'id',
               message: `Great. What is ${name}'s employee ID?`,
               validate: idInput => {
                  if (!idInput) {
                     console.log(`An ID must be entered.`);
                     return false;
                  }
                  return true;
               }
            },
            {
               type: 'input',
               name: 'email',
               message: `Alright, and what is ${name}'s email address?`,
               validate: emailInput => {
                  if (!validator.is_email_valid(emailInput)) {
                     console.log(`Make sure you get the format right and try again.`);
                     return false;
                  }
                  return true;
               }
            },
            {
               type: 'input',
               name: 'officeNumber',
               message: `Finally, what's the office number?`,
               validate: officeNumberInput => {
                  if (!officeNumberInput) {
                     console.log(`Either your manager works in a transient abyss (much respect) or you've made a mistake. Please enter a valid office number.`);
                     return false;
                  }
                  return true;
               }
            },
         ]).then(answers => { console.log(answers) });
   }