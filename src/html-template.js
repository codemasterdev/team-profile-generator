const fs = require('fs');

module.exports =
   buildTeam = () => {

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

   addCards();
};

