Online food system API built using **NESTJS** and **POSTGRESQL**. It follows a **RESTFul** design architecture. It's richly built with a simple scientific technique and best practices in the world of **API** design.

## Features
- auth as user , admin 
- upload product 
- add, edit, delete product
- send order confirmation via email
- manage online order
- Ajax hierarchical combobox for payment method.
- add delivery charge outside the coverage area
- secure reservation
- forum for customer comments about the site
- generates various report

## API Endpoints

| Methods | Endpoints                          | Access  | Description                              |
| ------- | ---------------------------------- | ------- | ---------------------------------------- |
| POST     | /auth/register                         | Public | register a new user                         |
 POST     | /auth/login                         | Public | login a user               | POST     | /GET        | /auth/profile                         | Private | get the profile of user currently connected               
|POST     | /auth/logout                         | Private | logout the current user                      |
| POST  | /product                          | Private | Admin upload a new product  user                            |
| PUT    | /product/[productId]                  | Private |  Admin update a product                   |
| DELETE    | /product/[productId] |[postId]             | Private | Admin Delete a product 
| GET| /product                 | PUBLIC | Get all the product   
| GET | /product/[productId]                   | Public | Get one product information 
| GET | /comments/[commentId]                  | Private | get a one comment
| DELETE  | /comments/[commentId]                         | Private | Delete the current comment |
POST | /product/[productId]/comment                  | Private | create a comment under a plate
| PUT | /comment/[commentId]              | PRIVATE | update the comment
| GET | /user/[userId]/comment              | PRIVATE | GET All the comments of the user who is login
| POST | /user/[userId]/reservation             | PRIVATE | Make a reservation 
| PUT | /user/[userId]/reservation/[reservationId]             | PRIVATE | Update the  reservation 
| GET | /user/[userId]/reservation             | PRIVATE | Get all the reservation of a user 
| DELETE | /user/[userId]/reservation/[reservationId]            | PRIVATE | Cancel the reservation of user
| DELETE | /reservation/[reservationId]            | PRIVATE | Cancel the reservation of user as admin
| POST | /reservation           | PRIVATE | Make a reservation for a user as admin
| PUT | /reservation/[reservationId]          | PRIVATE |Update a reservation for a user as admin
| DELETE | /reservation/[reservationId]          | PRIVATE |Delete a reservation for a user as admin
| PUT| /user/[userId]/report/[reportId]          | PRIVATE |Update a report as a user 
| DELETE | /user/[userId]/report/[reportId]          | PRIVATE |Delete a report as a user 
| POST | /user/[userId]/report          | PRIVATE |Add a report as a user 
| GET | /user/[userId]/report          | PRIVATE |Get all the report of a user 
| GET | /report/[reportId]          | PRIVATE |Get one report  
| UPDATE | /report/[reportId]          | PRIVATE |Update one report  as admin
| DELETE | /report/[reportId]          | PRIVATE |Delete one report  as admin
| DELETE | /report       | PRIVATE |Add one report  as admin
| POST | /user/[userId]/orders       | PRIVATE | make a order as a user
| PUT | /user/[userId]/orders/[ordersId]       | PRIVATE | Change a order as a user
| GET | /user/[userId]/orders/[ordersId]       | PRIVATE | Get a order as a user
| GET | /user/[userId]/orders      | PRIVATE | Get all the order of a user
| DELETE | /user/[userId]/orders/[orderId]      | PRIVATE | Delete a order of as a user
| GET | /orders/[orderId]      | PRIVATE | GET a order 
| GET | /orders     | PRIVATE | GET all the order 
| PUT | /orders     | PRIVATE | Update a order as admin 
| DELETE | /orders     | PRIVATE |Delete a order as admin 


                      

## Hosted Domain Link

[OnlineFood System API]()




[OnlineFood System API Shared Collection]

## Contributing

You can fork the repository and send pull request or reach out easily to me via twitter => [lucas zebre](https://twitter.com/ZebreLucas)

## Security Vulnerabilities

If you discover a security vulnerability within the project, please create an issue. All security vulnerabilities will be promptly addressed and appreciated.