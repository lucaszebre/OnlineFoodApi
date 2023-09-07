Online food system API built using **NESTJS** and **POSTGRESQL**. It follows a **RESTFul** design architecture. It's richly built with a simple scientific technique and best practices in the world of **API** design.

## Features
- auth as user , admin 
- upload product design online
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
|POST     | /logout[userId]                         | Private | logout the current user                      |
| PUT   | /user/[userId][postId]                          | Private | Update the information of the user                            |
| POST    | /user/[userId]                  | Private |  Create a post                  |
| DELETE    | /post/[postId] |[postId]             | Private | Delete  one post                     |
| PUT| /post/[postId]                 | Private | Update a post  
| DELETE | /post/[postId][postId]                  | Private | Delete a article
| GET | /comments/[commentId]                  | Private | get a current comment
| DELETE  | /comments/[commentId]                         | Private | Delete the current comment |
POST | /user/[userId]/post/[postId]/comment                  | Private | create a comment 
| PUT | /comment/[commentId]              | PRIVATE | update the comment
                      

## Hosted Domain Link

[OnlineFood System API]()




[OnlineFood System API Shared Collection]

## Contributing

You can fork the repository and send pull request or reach out easily to me via twitter => [lucas zebre](https://twitter.com/ZebreLucas)

## Security Vulnerabilities

If you discover a security vulnerability within the project, please create an issue. All security vulnerabilities will be promptly addressed and appreciated.