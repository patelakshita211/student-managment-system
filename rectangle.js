class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    findArea() {
        return this.length * this.breadth;
    }
}

const rectangle = new Rectangle(10, 5);

console.log("Length:", rectangle.length);
console.log("Breadth:", rectangle.breadth);
console.log("Area:", rectangle.findArea());