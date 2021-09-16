class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
    addToDB(employee, dbName) {
      const employeeParams = '(id, first_name, last_name, role_id, manager_id)';
    }

    getName() { return this.name };

    getId() { return this.id };

    getEmail() { return this.email };

    getRole() { return 'Employee' };
}

module.exports = Employee;
