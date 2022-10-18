<h2>
API Documentation
</h2>

<a style="font-size: 20px"> 
			<span style="color: blue">GET</span>  /users
</a>

<a style="font-size: 20px; color: black"> Description </a>

Get all user list by given query parameter, all parameters is optional.

<a style="font-size: 20px; color: black"> Parameters </a>

| Name | Description | Type | Location | Required
| - | - | - | - |
| limit | Take count | number | query | false
| offset  | Offset count | number | query | false
| first_name | User first name | string | query | false
| last_name | User last name | string | query | false
| email | User email | string | query | false

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | User is deleted. | -
| False | 404 | User by id={id} not found | -

<hr>

<a style="font-size: 20px"> 
			<span style="color: blue">Get by id</span>  /users/{id}
</a>
<a style="font-size: 20px; color: black"> Description </a>

Get user data by give id, where user id is required.

<a style="font-size: 20px; color: black"> Parameters </a>

| Name | Description | Type | Location | Required
| - | - | - | - |
| id | User id | number | query | true

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | - | User info
| False | 404 | User by id={id} not found | -

<hr>

<a style="font-size: 20px"> 
			<span style="color: blue">POST</span>  /users
</a>
<a style="font-size: 20px; color: black"> Description </a>

Create a new user, by given parameteres, all parameters are required.

<a style="font-size: 20px; color: black"> Parameters </a>

| Name | Description | Type | Location | Required
| - | - | - | - |
| email | Email address | string | body | true
| first_name | First anme | string | body | true
| last_name | Lirst anme | string | body | true
| password | Password | string | body | true

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 201 | User created. | -
| False | 409 | User already created. | -

<hr>

<a style="font-size: 20px"> 
			<span style="color: blue">PUT</span>  /users/{id}
</a>
<a style="font-size: 20px; color: black"> Description </a>

Update user data, by given user id, all parameters are optional.

<a style="font-size: 20px; color: black"> Parameters </a>

| Name | Description | Type | Location | Required
| - | - | - | - |
| first_name | First anme | string | body | false
| last_name | Lirst anme | string | body | false
| password | Password | string | body | false

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | User data is updated. | -
| False | 404 | User by id={id} not found | -

<hr>

<a style="font-size: 20px"> 
			<span style="color: blue">DELETE</span>  /users/{id}
</a>
<a style="font-size: 20px; color: black"> Description </a>

Delete user data by given user id, where user id is required.

<a style="font-size: 20px; color: black"> Parameters </a>

| Name | Description | Type | Location | Required
| - | - | - | - |
| id | User id | number | param | true

<a style="font-size: 20px; color: black"> Responses </a>

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | User is deleted. | -
| False | 404 | User by id={id} not found | -



