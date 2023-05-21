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
	commitments: [
		{
			id: "0987654321",
			totalSuccesfulCalls: 3,
			allocated: 27000000,
			pending: 7000000,
			outstanding: 6000000,
			capitalCall: {
				ammount: 7000000,
				dates: {
					requested: "05/18/2023",
					due: "05/22/2023",
				},
				receiver: {
					bank: "Pontoro Bank",
					account: "0987654321",
					routingNumber: "0123456789",
				},
			},
		},
		{
			id: "0846582846",
			totalSuccesfulCalls: 2,
			allocated: 12000000,
			pending: 34000000,
			outstanding: 6000000,
			capitalCall: {
				ammount: 12000000,
				dates: {
					requested: "05/21/2023",
					due: "05/23/2023",
				},
				receiver: {
					bank: "American Bank",
					account: "0458754322",
					routingNumber: "0123456789",
				},
			},
		},
		{
			id: "09875473892",
			totalSuccesfulCalls: 5,
			allocated: 73200000,
			pending: 56900000,
			outstanding: 100000000,
			capitalCall: {
				ammount: 19600000,
				dates: {
					requested: "08/14/2023",
					due: "08/28/2023",
				},
				receiver: {
					bank: "Wells Bank",
					account: "9874598347",
					routingNumber: "8763984739",
				},
			},
		},
	],
};

export { portfolio, capitalProcess, commitmentManagement };
