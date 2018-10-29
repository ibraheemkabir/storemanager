[![Coverage Status](https://coveralls.io/repos/github/ibraheemkabir/storemanager/badge.svgbranch=develop)](https://coveralls.io/github/ibraheemkabir/storemanager?branch=develop) 
[![Maintainability](https://api.codeclimate.com/v1/badges/841601697d850f317d67/maintainability)](https://codeclimate.com/github/ibraheemkabir/storemanager/maintainability)
[![Build Status](https://travis-ci.org/ibraheemkabir/storemanager.svg?branch=develop)](https://travis-ci.org/ibraheemkabir/storemanager)

# storemanager

store manager is a web application that helps store owners manage sales and product inventory records.

**View UI template:** [Click]()

## Features

### store products

- Add a store product
- Delete a store product
- Modify a store product
- View Particular store product.

### sales order
- View All sales orders
- View particular sales order

### User

- Pending Functionality

## Installation

Clone repo to your local machine:

```git
git clone https://github.com/ibraheemkabir/storemanager.git
```

**Install dependencies and run locally**<br/>
*Note>> Install npm if not already installed on local machine*

Then run:

```npm
npm install
```
Now start the server:

```npm
npm start
```

## Testing

To run tests:

```npm
npm test          /* Runs Mocha test */
```

## API

API is deployed at [here]() on heroku.

### API Routes

<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/products/</td> 
		<td>Get all products</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/products</td> 
		<td>Add a new store product</td>
	</tr>
	<tr>
		<td>GET single product</td>
		<td>/api/v1/product/id</td> 
		<td>Get a particular product with id</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/product/id</td> 
		<td>Delete a product with id </td>
	</tr>
	<tr>
		<td>PUT</td>
			<td>/api/v1/products/id</td> 
		<td>UPDATE a product information</td>
	</tr>
</table>

