/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && (balance > 0)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    this.accounts.push(newAccount);
    newAccount.deposit(balance);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};
Bank.prototype.getAccount = function (number) {};
Bank.prototype.getTotalAssets = function (holder, balance) {};
