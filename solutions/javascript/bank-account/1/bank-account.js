//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.money = 0;
    this.account = false;
  }

  open() {
  if(this.account) throw new ValueError();
  this.money = 0;
  this.account = true;
  }

  close() {
    if(!this.account) throw new ValueError();
    this.account = false;
  }

  deposit(a) {
    if(!this.account) throw new ValueError();
    if(this.account && a > 0) {
      this.money += a;  
    } else {
      throw new ValueError();
    }
  }

  withdraw(a) {
    if(!this.account) throw new ValueError();
    if(this.money >= a && a > 0){
      this.money -= a;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if(!this.account) throw new ValueError();
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
