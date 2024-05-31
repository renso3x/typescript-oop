// 1. Interface helps you to create abstraction of your classes
interface Shape {
    area(): number
    perimiter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}
    area(): number {
        return Math.PI * this.radius* this.radius
    }
    perimiter(): number {
        return 2 *  Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number 
    ){} 

    area(): number {
        return this.width * this.height
    }

    perimiter(): number {
        return 2 * (this.width + this.height)
    }
}

function calculateTotalArea(shape: Shape): number {
    return shape.area()
}

// Client Code
let circle = new Circle(5)
let rectangle = new Rectangle(4, 6)
console.log('Area of a circle' + calculateTotalArea(circle))
console.log('Area of a rectangle' +calculateTotalArea(rectangle))


// 2. Abstraction Implementation - Date() an example, where you just call .getFullYear() method on that class
// you dont need to know the implemenation behind it

const now = new Date()
const currentYear = now.getFullYear()
const currentMonth = now.getMonth() + 1
const currentDate = now.getDate()


// Down side of creating abstraction is if your interface has a large codebase it creates complexity
// Interface should be minimal and clear to what its purpose