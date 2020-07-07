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


