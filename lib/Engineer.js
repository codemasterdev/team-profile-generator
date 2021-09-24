const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
   };

   getGithub() { return this.github };
   getRole() { return 'Engineer' };
   getCard() {
      return `<div class="card card-position" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title-engineer">${this.name}</h2>
      <h3 class="card-subtitle mb-2">
         <i class="fas fa-laptop-code"></i> ${this.getRole()}
      </h3>
      <p class="card-text">
         <span>Employee ID:</span> ${this.id}<br />
         <span>Email:</span> <a href="mailto:${this.email}">${this.email}</a> <br />
         <span>GitHub:</span> <a href="https://github.com/${this.github}" target="_blank">${this.github}</a>
      </p>
   </div>
</div>` };
};

module.exports = Engineer;