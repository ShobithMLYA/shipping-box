# Shipping Box

## Description ##

> This specification describes a tiny application for calculating the shipping cost for boxes to Specific locations around the world. The application shall consist two simple views, one table and a form.

## Functionality ##
### View A - Form (Add box) ###
Form containing four fields:
 * Receiver name (input text)
* Weight (input number) in kilograms
 * Box colour (colour picker component / text) returned in RGB-format i.e. value becomes (255, 255, 255)
* Destination country (dropdown / select list) of the following choices
(multipliers below):
    - Sweden 
    - China
    - Brazil
    - Australia

 * Save button to store values in the database 

>The user shall be presented with some error message, indicating required fields, unless they all contains values when saving. Likewise, if the user tries to insert a negative value as weight, the user shall be presented with an error message explaining that negative values are not permitted and the field shall default to zero.

## Expected Outcome ##
>This task should be solved using some form of MVC-style design pattern, where presentation and business logic is somewhat separated. It should be a single-page application using ajax OR web sockets for backend communication. The backend should be designed as a REST-api or RPC-style api if using web sockets. Finally, with two endpoints/commands. One for saving boxes and another one for retrieving the list.

## Reference Documents ##
[Project Report](./Documents/ShobithMallya-ProjectReport.docx)
