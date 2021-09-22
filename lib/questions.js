const inquirer = require('inquirer');
const validator = require('node-email-validation');
const Manager = require('./Manager');

// create array to hold all team members
const teamMembers = [];

module.exports =
   initialPrompts = async () => {
      const answers = await inquirer
         .prompt([
            {
               type: 'input',
               name: 'name',
               message: `Hello! It's time to build your team. Let's begin with who's in charge -- what's the name of your manager?`,
               validate: nameInput_1 => {
                  if (!nameInput_1) {
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
               validate: idInput_1 => {
                  if (!idInput_1) {
                     console.log(`An ID must be entered.`);
                     return false;
                  }
                  return true;
               }
            },
            {
               type: 'input',
               name: 'email',
               message: ({ name: name_1 }) => `Alright, and what is ${name_1}'s email address?`,
               validate: emailInput_1 => {
                  if (!validator.is_email_valid(emailInput_1)) {
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
               validate: officeNumberInput_1 => {
                  if (!officeNumberInput_1) {
                     console.log(`Either your manager works in a transient abyss (much respect) or you've made a mistake. Please enter a valid office number.`);
                     return false;
                  }
                  return true;
               }
            },
         ]);

      // create the manager object and push it to the team members array
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      console.log(teamMembers);
   }