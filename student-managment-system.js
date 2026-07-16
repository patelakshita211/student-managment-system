class student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}

const students = [
    new student("Akshita", 20, "MCA"),
    new student("Nidhi", 22, "BCA"),
    new student("Riya", 21, "B.Tech"),
    new student("Aditi", 23, "M.Tech"),
    new student("Anaya", 19,"B.Sc")
];

//Destructing
const [student1, student2, student3, student4, student5] = students;

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

//Arrow Furnction
const printStudentsNames = (students) => {
    students.forEach(students => {
        console.log(students.name);
    });

};

printStudentsNames(students);

//promise 
function loadStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(students);
        },3000);
    });
}

//async / Await
async function displayStudents() {
    console.log("Loading Students Data....");
    
    const data = await loadStudents();

    console.log("Students Data Loaded");

    data.forEach((student) => {
        console.log(student);
    });
}

displayStudents();