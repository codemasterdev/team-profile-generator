const inquirer = require('inquirer');
const validator = require('node-email-validation');
const renderTemplate = require('../src/html-template');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// create array to hold all team members
const teamMembers = [];

module.exports =
   init = async () => {
      const answers = await inquirer
         .prompt([
            {
               type: 'input',
               name: 'name',
               message: `What's the name of your manager?`,
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
         ]);

      // create the manager object and push it to the team members array
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      addMemberOrBuildTeam();
   };

const addMemberOrBuildTeam = async () => {
   const userChoice = await inquirer
      .prompt([
         {
            type: 'list',
            name: 'addOrBuild',
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
         // create the html template file
         buildPage();
         // add cards to the html
         buildTeam(teamMembers);
         console.log(`Congratulations! Go to your index.html file in the /src directory to see your team page!`);
         break;
   };
}

engineerPrompts = async () => {
   const answers = await inquirer
      .prompt([
         {
            type: 'input',
            name: 'name',
            message: `What's your engineer's name?`,
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
            message: ({ name }) => `What is ${name}'s' employee ID?`,
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
            message: ({ name }) => `What is ${name}'s email address?`,
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
            message: ({ name }) => `What is ${name}'s GitHub username?'`,
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
   const answers = await inquirer
      .prompt([
         {
            type: 'input',
            name: 'name',
            message: `What's your intern's name?`,
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
            message: ({ name }) => `What is ${name}'s' employee ID?`,
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
            message: ({ name }) => `What is ${name}'s email address?`,
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
            message: ({ name }) => `Where does ${name}'s go to school?'`,
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