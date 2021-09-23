const Employee = require('./Employee');

class Manager extends Employee {
   constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
   };

   getOfficeNumber() { return this.officeNumber };
   getRole() { return 'Manager' };
   getCard() {
      return `<div class="card" style="width: 18rem">
   <div class="card-body">
      <h2 class="card-title">${this.name}</h2>
      <h3 class="card-subtitle mb-2 text-muted">
         <i class="fas fa-newspaper"></i> ${this.getRole()}
      </h3>
      <p class="card-text">
         Employee ID: ${this.id}<br />
         Email: <a href="mailto:${this.email}">${this.email}</a> <br />
         Office #: ${this.officeNumber}
      </p>
   </div>
</div>` };
};

module.exports = Manager;