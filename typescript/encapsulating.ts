// Encapsulation: balance is an enacpsulated state you hide the data. If you want to access it you need to expose a function a getter and a setter
class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance
    }

    // Balance
    public get balance() {
        return this._balance
    }

    // Deposit 
    public deposit(amount: number) {
        if (amount < 0) {
            return 'Invalid deposit amnount'
        }
        this._balance += amount
        }

    // Withdraw
    public withdraw(amount: number) {
        if (this._balance < 0 || (amount - this._balance) < 0) {
            return "Insufficient funds"
        }
        this._balance -= amount
    }

}


const mySavings = new BankAccount(1000)
mySavings.deposit(-1)
mySavings.withdraw(200)
console.log('Current balance:', mySavings.balance)
