# Phase 2 Week 1 code challenge
## FLATIRON BANK

## Description
The Bank of flatiron is a web application that allows users to search and add transactions by inputing the amount, date, description and category.

## Introduction
This project is developed using the react framework.

### Features
- It has a db.json 
- It has 5 components

### Installation
To run this project locally, follow these steps:

1. #### Clone this repository:
```bash
git clone
cd bank
```
2. #### Set up JSON Server:

Ensure you have JSON Server installed. if not, install it using npm:

```bash
npm install -g json-server
```

3. #### Create a db.json file:
 A db.json file was provided:

 ```{
  "transactions": [
    {
      "id": "1",
      "date": "2019-12-01",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": "2",
      "date": "2019-12-01",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": "3",
      "date": "2019-12-02",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": "4",
      "date": "2019-12-04",
      "description": "Sunglasses, Urban Outfitters",
      "category": "Fashion",
      "amount": -24.99
    },
    {
      "id": "5",
      "date": "2019-12-06",
      "description": "Venmo, Alice Pays you for Burrito",
      "category": "Food",
      "amount": 8.75
    },
    {
      "id": "6",
      "date": "2019-12-06",
      "description": "Chipotle",
      "category": "Food",
      "amount": -17.59
    },
    {
      "id": "7",
      "date": "2019-12-07",
      "description": "Birthday Check from Grandma",
      "category": "Gift",
      "amount": 50
    },
    {
      "id": "8",
      "date": "2019-12-09",
      "description": "Lyft Ride",
      "category": "Transportation",
      "amount": -13.25
    },
    {
      "id": "9",
      "date": "2019-12-11",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": "10",
      "date": "2019-12-16",
      "description": "Tickets, Flatiron Multiplex Cinemas",
      "category": "Entertainment",
      "amount": -24
    },
    {
      "id": "11",
      "date": "2019-12-16",
      "description": "MTA Vending Machine: MetroCard",
      "category": "Transportation",
      "amount": -116.39
    },
    {
      "id": "12",
      "date": "2019-12-17",
      "description": "Venmo, Pay Roommate for Rent",
      "category": "Housing",
      "amount": -975
    },
    {
      "id": "3635",
      "date": "",
      "description": "",
      "category": "",
      "amount": ""
    },
    {
      "id": "8d62",
      "date": "2024-02-03",
      "description": "b",
      "category": "y",
      "amount": "2000"
    },
    {
      "id": "817f",
      "date": "2024-08-08",
      "description": "h",
      "category": "i",
      "amount": "3000"
    },
    {
      "id": "ddc6",
      "date": "2024-01-03",
      "description": "g",
      "category": "i",
      "amount": "400"
    },
    {
      "id": "fdbd",
      "date": "2024-08-06",
      "description": "g",
      "category": "u",
      "amount": "300"
    }
  ]
}
```
#### Run the JSON server:
Start the server by running the following command in the project directory:

```bash
json-server --watch src/db.json
```

#### Run the browser:
run npm start to view the application in the web browser.

#### Usage:
1. Add transaction:
- Transactions are added once the user inputs a value into the form that the user will use to submit the name, amount, description and category of the transaction.

2. Search transaction:
- Once the user inputs the name of the
transactions, the transactions are filtered.

### Contributing
Contributions are welcome! If you have suggestions for improvements or features, please feel free to create a pull request or open an issue.

### Author
[Fiona](https://github.com/mburufiona)
This project is open-source and available under the MIT License.

### Deployed Backend Link
[link]()



