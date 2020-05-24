module.exports = function() {
	const faker = require('faker');
	const _ = require('lodash');
	return {
		bankAccounts: _.times((2),(n) => {
			return {
				id: n,
				bankName: faker.company.companyName(),
				// create a random number with nine digits
				routingNumber: faker.random.number({
					min: 100000000,
					max: 999999999
				}),
				accountNumber: faker.random.number({
					// create a random number with up to twelve digits
					min: 1000000000,
					max: 99999999999
				}),
				accountType: faker.finance.accountName(),
				accountBalance: faker.finance.amount(),
				createdAt: faker.date.past()
			}
		})
	}
}