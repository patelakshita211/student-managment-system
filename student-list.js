class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Akshita", 20);
const student2 = new Student("Nidhi", 22);
const student3 = new Student("Riya", 21);

const students = [student1, student2, student3];

//Arrow Function
const displayStudents = (students) => {
    students.forEach((student) => {
        console.log(`name: ${student.name}, age: ${student.age}`);
    });
};

displayStudents(students);