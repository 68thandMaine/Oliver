# Oliver Ruby Backend

This is a small proof of concept application that serves as a ruby server to the Oliver application.

This project will evolve by using Sinatra at first, then migrating to Rails.

## Bank Account

### Bank Account Routes

| HTTP verb | Route | CRUD Action | Description |
|---|---|---|---|
| GET | `/bank_accounts` | READ | Route to return all bank accounts from the server. |
| GET | `/bank_accounts/:id` | READ | Route to return information about one bank account from the server. |
| POST | `/bank_accounts` | CREATE | Route to create a new bank account in the server. |
| PATCH / PUT | `/bank_accounts/:id` | UPDATE | Route to update a bank account's information on the server. |
| DELETE | `/bank_accounts/:id` | DELETE | Route to remove one bank account from the server. |
