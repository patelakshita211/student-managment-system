class employee {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }

    showsalary(){
        console.log(`Employee Name : ${this.name} and Salary : ${this.salary}`);
    
    }
}

const emp1 = new employee("Riya", 50000);
emp1.showsalary();