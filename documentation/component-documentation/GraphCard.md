# GraphCard.jsx

The [`<GraphCard />`](../../src/components/card/GraphCard.jsx) component is used to display a the title, graph, and a brief summary of the graph data as the body.

___

## Props

| Prop Name | PropType | Purpose |
|---|---|---|
| graphData | Array or Object | The data that will be charted. |
| graphTitle | String | This will be the title of the card.|
| graphType | String | This prop will be passed to the `<Graphs />` component so it can render the correct graph.|

## graphData

To build this component I need to define my base redux state tree MVP:

```JavaScript

	bankAccounts: [
		{
			id: ,
			bankName: ,
			accountName: ,
			accountType: ,
			routingNumber: ,
			accountNumber: ,
		},
	],
	creditCards: [
		{
			id: ,
			creditCardName: ,
			creditCardNumber: ,
			apy: ,
			minPayment: ,
			dueDate: ,
		},
	],
	loans: [
		{
			id: ,
			loanName: ,
			apy: ,
			minPayment: ,
			dueDate: ,
		},
	],
	transactions: [
		{
			id: ,
			transactionType: ,
			transactionDescription: ,
			amount: ,
			accountType: ,
			accountId: ,
		},
	]

```