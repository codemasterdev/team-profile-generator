const fs = require('fs');



// take in array of all employees
buildTeam = employees => {

   // initialize array for each card to be added to html template
   const employeeCards = [];

   for (emp of employees) {
      // for each employee, push respective card into html template
      if (emp.getRole() === 'Manager') {
         employeeCards.push(emp.getCard());
      } else if (emp.getRole() === 'Engineer') {
         employeeCards.push(emp.getRole());
      } else if (emp.getRole() === 'Intern') {
         employeeCards.push(emp.getRole());
      }
   }

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
         <link rel="stylesheet" href="./src/css/style.css" />
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
   </html>

         `
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