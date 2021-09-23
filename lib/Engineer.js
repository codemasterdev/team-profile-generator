const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
   };

   getGithub() { return this.github };
   getRole() { return 'Engineer' };
   getCard() { return engineerCard() };
};

engineerCard = () => {

   const { name, id, email, github, role } = Engineer;

   return `<div class="card" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">
         <i class="fas fa-graduation-cap"></i> ${role}
      </h3>
      <p class="card-text">
         Employee ID: ${id}<br />
         Email: <a href="mailto:${email}">${email}</a> <br />
         GitHub: ${github}
      </p>
   </div>
</div>`
};

module.exports = Engineer;