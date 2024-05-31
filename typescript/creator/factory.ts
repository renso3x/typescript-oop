// Advantage has a set of default configuration and methods
// Class extends this method dont need to set default configuration

abstract class Car {
    constructor(public model: string, public year: number) {}

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    displayCarInfo(): void {
        console.log(`This is a Sedan. Model ${this.model}, year ${this.year}`)
    }
}
class SUV extends Car {
    displayCarInfo(): void {
        console.log(`This is a SuV. Model ${this.model}, year ${this.year}`)
    }
}

class Truck extends Car {
    displayCarInfo(): void {
        console.log(`This is a Truck. Model ${this.model}, year ${this.year}`)
    }
}

class CarFactory {
    public creator(type: "Sedan" | "SUV" | "Truck", model: string, year: number) {
        switch(type) {
            case "Sedan":
                return new Sedan(model, year)
            case "SUV":
                return new SUV(model, year)
            
            case "Truck":
                return new Truck(model, year)

            default:
                throw new Error('Invalid type')
        }
    }
}

const eppingCarFactory = new CarFactory()
const sedan = eppingCarFactory.creator("Sedan", "Altis", 2020)
sedan.displayCarInfo()

const suv = eppingCarFactory.creator("SUV", "fORTUNER", 2020)
suv.displayCarInfo()
const truck = eppingCarFactory.creator("Truck", "HIACE", 2020)
truck.displayCarInfo()

abstract class PaymentProcessor {
    constructor(public amount: number) {}
    abstract processPayment(): void
}

class PaypalProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing paypal payment: ${this.amount}`)
    }
}


class BankTransferProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing brank transfer payment: ${this.amount}`)
    }
}


class StrifeProcessor extends PaymentProcessor {
    processPayment(): void {
        console.log(`Processing strife payment: ${this.amount}`)
    }
}

class ProcessPaymentFactory {
    public createProcessor(type: "paypal" | "stripe" | "bank", amount: number) {
        switch (type) {
            case "paypal":
                return new PaypalProcessor(amount)
            
            case "stripe":
                return new StrifeProcessor(amount)

            default:
                return new BankTransferProcessor(amount)
        }
    }
}

const cashier = new ProcessPaymentFactory()
const table1 = cashier.createProcessor("paypal", 500)
table1.processPayment()
const table2 = cashier.createProcessor("stripe", 500)
table2.processPayment()
const table3 = cashier.createProcessor("bank", 500)
table3.processPayment()
