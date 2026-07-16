class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

const books = [
    new Book("javascript", "John", 500),
    new Book("Python", "Jane", 600),
    new Book("java", "Doe", 700),
    new Book("C++", "Smith", 800),
    new Book("C#", "Johnson", 900)
];

//Destructing
const [book1, book2, book3, book4, book5] = books;

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);

//Arrow Function
const totalPrice = (books) => {
    let total = books.reduce((sum, book) => sum + book.price, 0);
    console.log("Total Price:", total);
};

totalPrice(books);

//promise
function fetchBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(books);
        },3000);
    });
}

//async / Await
async function displayBooks() {
    console.log("Loading Books Data....");

    const data = await fetchBooks();

    console.log("Books Data Loaded");

    data.forEach((book) => {
        console.log(book);
    });
}

displayBooks();