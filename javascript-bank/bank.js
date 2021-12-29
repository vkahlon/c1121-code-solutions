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
    return newAccount.number;
  } else {
    return null;
  }
};
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};
Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance();
  }
  return totalAssets;
};
