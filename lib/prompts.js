const inquirer = require('inquirer');
const validator = require('node-email-validation');
const fs = require('fs');
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
         console.log(`Congratulations! Check your /src directory's index.html file to see your team page!`);
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
            message: ({ name }) => `Where does ${name}'s go to school?`,
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

// take in array of all employees
buildTeam = () => {
   // initialize array for each card to be added to html template
   const employeeCards = [];
   console.log(teamMembers);
   for (i = 0; i < teamMembers.length; i++) {
      // for each employee, push respective card into html template
      if (teamMembers[i].getRole() === 'Manager') {
         employeeCards.push(teamMembers[i].getCard());
      } else if (teamMembers[i].getRole() === 'Engineer') {
         employeeCards.push(teamMembers[i].getCard());
      } else if (teamMembers[i].getRole() === 'Intern') {
         employeeCards.push(teamMembers[i].getCard());
      }
   }

   console.log('Employee cards: ' + employeeCards);
   // build html page
   buildPage(employeeCards);
};

// take cards and build the html page
buildPage = employeeCards => {

   const htmlTemplate = `<!DOCTYPE html >
   <html lang="en">
      <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Build Your Team</title>
         <script
            src="https://kit.fontawesome.com/b872771612.js"
            crossorigin="anonymous"
         ></script>
         <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
         />
         <link rel="stylesheet" href="./css/style.css" />
      </head>

      <body>
         <header>
            <h1>My Team Builder</h1>
         </header>

         <main>
            <div class="container d-flex flex-wrap justify-content-center">
            ${employeeCards.join('')}
         </main>
      </body>
   </html>`

   renderHtmlTemplate(htmlTemplate);
};


renderHtmlTemplate = async (htmlTemplate) => {
   // create html template file in src directory
   try {
      await fs.writeFileSync('./src/index.html', htmlTemplate)

   } catch (err) {
      console.log(`${err} -- Something went wrong when writing your file!`);
   }
};
