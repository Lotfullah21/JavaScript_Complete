function newAccount(name, savings) {
	let balance = savings;
	function showBalance() {
		console.log(`Hello ${name}, you have ${balance}$ in your account`);
	}

	function deposit(money) {
		balance += money;
		return showBalance();
	}

	function withdraw(money) {
		if (money > balance) {
			console.log("withdrawing money is higher than your balance");
		} else {
			balance -= money;
		}
		showBalance();
	}

	return { getBalance: showBalance, deposit: deposit, withdraw: withdraw };
}
const joseph = newAccount("Joseph", 400);
const ahmad = newAccount("Ahmad", 300);

joseph.getBalance();

ahmad.getBalance();
ahmad.deposit(400);
ahmad.withdraw(200);
ahmad.getBalance();
