# Oliver Redux State Structure

Before I connect a backend to Oliver, I want to be able to generate fake data and seed it to Redux so that I can mock a large amount of data while developing Oliver.

Surly there is a library out there that can help me accomplish this task. If I can find one then I can seed redux and then remove reliance on hard coded JSON files.

- After cursory research I will add two new dependencies to Oliver
	- [`json-server`](https://github.com/typicode/json-server) || [`json-schema-faker`](https://github.com/json-schema-faker/json-schema-faker/tree/master/docs)
	- [`faker.js`](https://github.com/Marak/faker.js)

___

## Dependency Validation
df
### `json-server`

- This dependency will allow me to generate fake REST API data that I can probably use to fill Redux.

- In particular I think that this section will be of use: [Generate Random Data](https://github.com/typicode/json-server#generate-random-data) - however, I will need to use it in conjunction with `faker.js`.

### `faker.js`

- This dependency can generate random values for data. I will use faker methods in the `json-server` generate radom data functions.

### `json-schema-faker`

- This is an optional dependency that would be used instead of the `json-server` package. Essentially this package allows you to create schemas that you can use faker methods to define objects with.

___

## Possible Schemas

The current strategy for developing Oliver starts with creating the a static dashboard. One challenge that I am going to encounter is what the real shape of the data will look like vs how I am passing static data through components.

I should consider the shape of Redux now that I can see the data I want displayed.

### Redux State Slices

These could be delivered throug selectors potentially.

- bankAccounts
- creditCards
- loans
- transactions
- goals
- bills