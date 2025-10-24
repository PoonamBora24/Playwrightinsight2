class BankAccount
{
    constructor(accountname,accountno, intialbalance)
    {
 this.acct_holdername=accountname;
 this.acctNumber=accountno;
 this.balance=intialbalance;
     }

     deposit(amount)
     {
this.balance += amount;
console.log(`The balance after depositing the amount  $${amount} is $${this.balance}`)
     }

     withdraw(amount)
     {
        if((this.balance-amount)>1000)
        {
            this.balance -= amount;
            console.log(`Amount withdrawn is $${amount} and updated balance is $${this.balance}`)
        }
        else 
        {
            console.log("Insufficient balance")
        }
     }
}

let acct1=new BankAccount("Poonam",76877, 1000);
acct1.deposit(5000);
acct1.withdraw(2000);
