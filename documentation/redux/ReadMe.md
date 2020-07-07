# Redux Integration

Oliver will use Redux to store data fetched from the API gateway. Each route / view will have it's actions dispatched to narrow specificity and limit the size of each payload.

___

## Routes

 For the MVP of Oliver I will need to collect information on debts, bills, and paychecks. For the sake of efficiency I will also collect the basic information for the data Oliver uses for each view's specific data.

### Main Route: `./`

The main route will need to return the following object:

```JSON
{
  "bankAccounts": [{"..."},],
  "creditCards": [{"..."}],
  "transactions": [{"..."}]
}
```

#### Testing the main route

The main route will test the return object from the main route. If the API gateway returns an error, then there will be a way to handle it - though as of now, I'm not sure what that will look like. 

#### Testing `bankAcccount` 

The bankAccount property will return either an array full of bank account objects, or it will be an error object. 

I think that this will make testing easier because I will be able to assert that success are arrays and failures are objects. 

##### Test Structure

Each test will need to use `fetchMock` and `redux-mock-store` to be tested. Taking advantage of the `afterEach` lifecycle hook, I encapsulate `fetchMock.restore()` in the hook to reset all of the mock fetched data.