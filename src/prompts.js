const inquirer = require('inquirer');
const validator = require('node-email-validation');
const chalk = require('chalk');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const generatePageFunctions = require('./html-output');

// create array to hold all team members
const teamMembers = [];

module.exports =
   init = async () => {
      // welcome user to the app
      console.log(
         chalk` {bold.magenta
   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   ***************************************
   WELCOME TO YOUR TEAM PROFILE GENERATOR!
   ***************************************
   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&}
   `
      )
      const answers = await inquirer
         .prompt([
            {
               type: 'input',
               name: 'name',
               message: chalk.redBright(`What's the name of your manager?`),
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
               message: ({ name }) => chalk.redBright(`Great. What is ${name}'s' employee ID?`),
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
               message: ({ name }) => chalk.redBright(`Alright, and what is ${name}'s email address?`),
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
               message: chalk.redBright(`Finally, what about the office number?`),
               validate: officeNumberInput => {
                  if (!officeNumberInput) {
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
      addMemberOrBuildTeam();
   };

module.exports =
   addMemberOrBuildTeam = async () => {
      const userChoice = await inquirer
         .prompt([
            {
               type: 'list',
               name: 'addOrBuild',
               message: 'Do you want to add an employee or finish building your team?',
               choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
            },
         ]);

      // use a switch statement to call the proper function based on the user choice
      switch (userChoice.addOrBuild) {
         case 'Add an engineer':
            engineerPrompts();
            break;
         case 'Add an intern':
            internPrompts();
            break;
         case 'Finish building my team':
            buildTeam(teamMembers);
            console.log(`Congratulations! Check your /dist directory's index.html file to see your team page!`);
            break;
      };
   };

engineerPrompts = async () => {
   console.log(
      chalk` {bold.green
   <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>
   **************************************
   ~~~~~~~~~~ ADD AN ENGINEER ~~~~~~~~~~~
   **************************************
   <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>}
   
   `
   )
   const answers = await inquirer
      .prompt([
         {
            type: 'input',
            name: 'name',
            message: chalk.green(`What's your engineer's name?`),
            validate: nameInput => {
               if (!nameInput) {
                  console.log(`You need a name for your engineer!`);
                  return false;
               }
               return true;
            }
         },
         {
            type: 'input',
            name: 'id',
            message: ({ name }) => chalk.green(`What is ${name}'s' employee ID?`),
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
            message: ({ name }) => chalk.green(`What is ${name}'s email address?`),
            validate: emailInput => {
               if (!validator.is_email_valid(emailInput)) {
                  console.log(`You must have a valid email address format.`);
                  return false;
               }
               return true;
            }
         },
         {
            type: 'input',
            name: 'github',
            message: ({ name }) => chalk.green(`What is ${name}'s GitHub username?`),
            validate: githubInput => {
               if (!githubInput) {
                  console.log(`Please enter a GitHub username.`);
                  return false;
               }
               return true;
            }
         },
      ]);

   const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
   teamMembers.push(engineer);
   addMemberOrBuildTeam();
};

internPrompts = async () => {
   console.log(
      chalk` {bold.yellow
   <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>
   **************************************
   ~~~~~~~~~~~ ADD AN INTERN ~~~~~~~~~~~~
   **************************************
   <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>}
   
   `
   )
   const answers = await inquirer
      .prompt([
         {
            type: 'input',
            name: 'name',
            message: chalk.yellow(`What's your intern's name?`),
            validate: nameInput => {
               if (!nameInput) {
                  console.log(`You need a name entry!`);
                  return false;
               }
               return true;
            }
         },
         {
            type: 'input',
            name: 'id',
            message: ({ name }) => chalk.yellow(`What is ${name}'s' employee ID?`),
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
            message: ({ name }) => chalk.yellow(`What is ${name}'s email address?`),
            validate: emailInput => {
               if (!validator.is_email_valid(emailInput)) {
                  console.log(`You must have a valid email address format.`);
                  return false;
               }
               return true;
            }
         },
         {
            type: 'input',
            name: 'school',
            message: ({ name }) => chalk.yellow(`Where does ${name} go to school?`),
            validate: schoolInput => {
               if (!schoolInput) {
                  console.log(`Please enter a school.`);
                  return false;
               }
               return true;
            }
         },
      ]);

   const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
   teamMembers.push(intern);
   addMemberOrBuildTeam();
};
