/***
 * Fake data providaded by the model image
 */

const portfolio = {
	pervalue: 7762500,
	gat: {
		quantity: 5.55,
		denomination: 1000000,
	},
	yield: {
		annual: 3.5,
	},
};

const capitalProcess = {
	capital: 0,
	due: "04/11/2023",
};

const commitmentManagement = {
	ids: ["000000000", "000000001", "000000002"],
	commitment: {
		id: "0987654321",
		totalSuccesfulCalls: 3,
		allocated: 27000000,
		pending: 7000000,
		outstanding: 6000000,
		total: 40000000,
	},
	capitalCall: {
		ammount: 7000000,
		dates: {
			requested: "05/18/2023",
			due: "05/22/2023",
		},
		receiver: {
			bank: "Banco Bank",
			account: "0987654321",
			routingNumber: "0123456789",
		},
	},
};

export { portfolio, capitalProcess, commitmentManagement };
