
var bankIdNumbers = [
	{chase: "100000000"}, {bankOfAmerica: "200000000"}, {wellsFargo: "300000000"}
];

var chaseCustomers = [{
    firstName: 'Abiam',
    lastName: 'Velazquez',
    pin: '1234',
    savingsAccount: 'CHA-274649',
    savingsAccountBalance: 3455,
    checkingAccount: 'CHA-274650',
    checkingAccountBalance: 3620
}, {
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    pin: '5667',
    savingsAccount: 'CHA-293733',
    savingsAccountBalance: 234,
    checkingAccount: 'CHA-193048',
    checkingAccountBalance: 29367
}, {
    firstName: 'Richard',
    lastName: 'Hendricks',
    pin: '1899',
    savingsAccount: 'CHA-1932733',
    savingsAccountBalance: 4994,
    checkingAccount: 'CHA-19312048',
    checkingAccountBalance: 29367
}]

var wellsFargoCustomers = [{
    firstName: 'Piper',
    lastName: 'Chapman',
    pin: '5223',
    savingsAccount: 'WEL-374649',
    savingsAccountBalance: 34,
    checkingAccount: 'WEL-474650',
    checkingAccountBalance: 193
}, {
    firstName: 'Stephen',
    lastName: 'curryWithTheThreeBoii',
    pin: '6643',
    savingsAccount: 'WEL-374649',
    savingsAccountBalance: 10990877,
    checkingAccount: 'WEL-474650',
    checkingAccountBalance: 27377193
}, {
    firstName: 'Kim',
    lastName: 'Kardashian',
    pin: '3344',
    savingsAccount: 'WEL-374649',
    savingsAccountBalance: 1,
    checkingAccount: 'WEL-474650',
    checkingAccountBalance: 20
}]

var bankOfAmericaCustomers = [{
    firstName: 'Walter',
    lastName: 'White',
    pin: '3497',
    savingsAccount: 'BOA-3734649',
    savingsAccountBalance: 34800,
    checkingAccount: 'BOA-1474650',
    checkingAccountBalance: 9863
}, {
    firstName: 'Erlich',
    lastName: 'Bachman',
    pin: '3467',
    savingsAccount: 'BOA-32734649',
    savingsAccountBalance: 0,
    checkingAccount: 'BOA-31474650',
    checkingAccountBalance: 0
}, {
    firstName: 'Lorna',
    lastName: 'Morello',
    pin: '3788',
    savingsAccount: 'BOA-8434649',
    savingsAccountBalance: 0,
    checkingAccount: 'BOA-84474650',
    checkingAccountBalance: 0
}]
// }]

	function get_balance() {
		alert('Your current checking balance is: ' + bankOfAmerica.checkingAccountBalance + " and your savings account balance is: " + bankOfAmerica.savingsAccountBalance);
		atm();
	}
	function make_deposit() {
		var deposit = prompt('How much would you like to deposit?');
		if (isNaN(deposit) || deposit === '') {
			alert('Error: please enter a number!');
			make_deposit();
		} else {
			var checkingOrSaving = parseInt(promt("Would you like to deposit into your Checking or Savings? Press 1 for Checking, and 2 for Savings."));
			if(checkingOrSaving == 1)
			{
				bankOfAmerica.checkingAccountBalance += deposit;
				get_balance();
			}
			else
			{
				bankOfAmerica.savingsAccountBalance += deposit;
				get_balance();
			}
		}
	}
	function make_withdrawal() {
		var withdrawal = prompt('How much would you like to withdrawal?');
		if (isNaN(withdrawal) || withdrawal === '') {
			alert('Error: please enter a number!');
			make_withdrawal();
		} else {
			var checkingOrSaving = parseInt(prompt("Would you like to access you Checking or Savings account? Press 1 for Checking, and 2 for Savings."));
			if(checkingOrSaving == 1)
			{
				if(withdrawal > bankOfAmerica.checkingAccountBalance)
					alert("YOU POOR - NOT ENOUGH MONEY IN YOUR CHECKING.");
				else
				{
					bankOfAmerica.checkingAccountBalance -= withdrawal;
					alert("TAKE YO MONEY! Please...(deducted from checking).");
					get_balance();
				}
			}
			else
			{
				if(withdrawal > bankOfAmerica.savingsAccountBalance)
					alert("YOU POOR - NOT ENOUGH MONEY IN YOUR SAVINGS.");
				else
				{
					bankOfAmerica.savingsAccountBalance -= withdrawal;
					alert("TAKE YO MONEY! Please...(deducted from savings).")
				}
			}

		}
	}
	
	function error() {
		alert('Error: accepted numbers are 1 through 4.');
		atm();
	}
	function exit() {
		var confirm_leave = confirm('You have selected exit.');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		}
	}

	function atm() {
		var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
		if (choice === 1) {
			get_balance();
		} else if (choice === 2) {
			make_deposit();
		} else if (choice === 3) {
			make_withdrawal();
		} else if (choice === 4) {
			exit();
		} else {
			error();
		}
	}
	atm();
