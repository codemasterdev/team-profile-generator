const fs = require('fs');
const chalk = require('chalk');
const teamInfoForPage = require('./prompts');

buildTeam = (teamMembers) => {
   // initialize array for each card to be added to html template
   const employeeCards = [];
   // push each employee card into the employee card array to be rendered onto the HTML page
   for (member of teamMembers) { employeeCards.push(member.getCard()); };
   console.log(
      chalk` 
{bold.green YOUR TEAM MEMBERS:}      
      `);
   console.table(teamMembers);
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
   // create html template file in /dist directory
   try {
      await fs.writeFileSync('./dist/index.html', htmlTemplate)

   } catch (err) {
      console.log(`${err} -- Something went wrong when writing your file!`);
   }
};