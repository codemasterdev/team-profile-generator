const inquirer = require('inquirer');
const validator = require('node-email-validation');
const Manager = require('./Manager');

// create array to hold all team members
const teamMembers = [];

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
               message: ({ name }) => `Great. What is ${name}'s' employee ID?`,
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
               message: ({ name }) => `Alright, and what is ${name}'s email address?`,
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
               message: `Finally, what about the office number?`,
               validate: officeNumberInput => {
                  if (!officeNumberInput) {
                     console.log(`Either your manager works in a transient abyss (much respect) or you've made a mistake. Please enter a valid office number.`);
                     return false;
                  }
                  return true;
               }
            },
         ]).then(answers => {
            // create the manager object and push it to the team members array
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            console.log(teamMembers);
         });
   }