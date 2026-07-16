let marks = 30;

const result = new Promise((resolve, reject) => {
    if (marks >= 35) {
        resolve("Student passed");
    }else {
        reject("student Failed")
    }   
});

result
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });