class BankAccount {
    constructor(accountHolder,balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Balance after deposit: ${this.balance}`);
    }

    withdraw(amount) {
            this.balance -= amount;
            console.log(`Balance after withdrawal: ${this.balance}`);
        }
}

const account1 = new BankAccount("Akshita", 10000);

console.log(`Account Holder: ${account1.accountHolder}`);
console.log(`Initial Balance: ${account1.balance}`);

account1.deposit(2000);
account1.withdraw(1500);

