

class Animal {
    constructor(public name: string){
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`)
    }
}

class Dog extends Animal {
    constructor(public name: string) {
        super(name)
    }

}

const bruce = new Dog("Bruce")
bruce.move(5)


class Product {
    constructor(
        public id: string,
        public price: number,
        public description: string
    ) {}

    display() {
        console.log(
            `ID: ${this.id}, Price ${this.price}, Description: ${this.description}`
        )
    }
}

class Book extends Product {
    constructor(
        public id: string,
        public price: number,
        public description: string,
        public title: string,
        public author: string,

    ) {
        super(id, price, description)
    }

    display(): void {
        super.display()
        console.log(`Author ${this.author}, Title: ${this.title}`)
    }
}

class Electronic extends Product {
    constructor(
        public id: string,
        public price: number,
        public description: string,
        public brand: string,
        public model: string,

    ) {
        super(id, price, description)
    }

    display(): void {
        super.display()
        console.log(`Brand ${this.brand}, Model: ${this.model}`)
    }
}


let book = new Book("1", 19.99, "Finance book", "john doe", "A good man")
book.display()


let iphone = new Electronic("2", 129.99, "Iphone", "Apple", "Iphone 15")
iphone.display()