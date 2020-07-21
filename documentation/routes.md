# The Following is a Table of Routes for Oliver

Oliver will be the Frontend to a much larger distributed system and will communicate with an API gateway rather than just one backend. This will allow me to build several modular backend services to handle the needs of Oliver.

___

## API Gateway

The API gateway for this project will be named `Azazel`, and will route requests from Oliver to different backend repositories.

| HTTP Method | `Azazel` Route | Destination Route | Destination Repo |  Purpose |
|---|---|---|---|---|---|
| `POST` | `./newBankAccount` | `./waldorf/new` | Waldorf | This route creates a new bank account. |