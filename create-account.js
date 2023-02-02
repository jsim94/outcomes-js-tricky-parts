function createAccount(pin, amount = 0) {
  let balance = amount;
  let _pin = pin;

  const _checkPin = (pin) => {
    if (_pin != pin) return true;
  };

  const checkBalance = (pin) => {
    if (_checkPin(pin)) return "Invalid PIN.";
    return `$${balance}`;
  };

  const deposit = (pin, amount) => {
    if (_checkPin(pin)) return "Invalid PIN.";
    balance += amount;
    return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
  };

  const withdraw = (pin, amount) => {
    if (_checkPin(pin)) return "Invalid PIN.";
    if (balance - amount < 0)
      return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    balance -= amount;
    return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
  };

  const changePin = (oldPin, newPin) => {
    if (_checkPin(oldPin)) return "Invalid PIN.";
    _pin = newPin;
    return "PIN successfully changed!";
  };

  return {
    checkBalance,
    deposit,
    withdraw,
    changePin,
  };
}

module.exports = { createAccount };
