const Employee = require('./Employee');

class Engineer extends Employee {
   constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
   };

   getGithub() { return this.github };
   getRole() { return 'Engineer' };
   getCard() {
      return `<div class="card" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title">${this.name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">
         <i class="fas fa-laptop-code"></i> ${this.getRole()}
      </h3>
      <p class="card-text">
         Employee ID: ${this.id}<br />
         Email: <a href="mailto:${this.email}">${this.email}</a> <br />
         GitHub: <a href"https://github.com/${this.github}>${this.github}</a>
      </p>
   </div>
</div>` };
};

module.exports = Engineer;