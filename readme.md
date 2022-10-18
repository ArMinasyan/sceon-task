# API Documentation

All response have this structure:
``` 
{
  statusCode: number;
  success: boolean;
  data: any;
  message: string;
  validationError: {
      property: string;
      message: string;
  } | {};
}
```
#

### Method endpoint
	GET /users

### Description
	Get all user list by given query parameter, all parameters is optional.

### Parameters 

| Name | Description | Type | Location | Required
| - | - | - | - | - |
| limit | Take count | number | query | false
| offset  | Offset count | number | query | false
| first_name | User first name | string | query | false
| last_name | User last name | string | query | false
| email | User email | string | query | false

### Responses

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | User is deleted. | -
| False | 404 | User by id={id} not found | -

<hr>

### Method endpoint
	GET /users/{id}

### Description 
	Get user data by give id, where user id is required.

### Parameters

| Name | Description | Type | Location | Required
| - | - | - | - | - |
| id | User id | number | query | true

### Responses

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | - | User info
| False | 404 | User by id={id} not found | -

<hr>

### Method endpoint
	POST /users

### Description
	Create a new user, by given parameteres, all parameters are required.

### Parameters

| Name | Description | Type | Location | Required
| - | - | - | - | - |
| email | Email address | string | body | true
| first_name | First anme | string | body | true
| last_name | Lirst anme | string | body | true
| password | Password | string | body | true

### Responses

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 201 | User created. | -
| False | 409 | User already created. | -

<hr>

### Method endpoint
	PUT /users/{id}

### Description
	Update user data, by given user id, all parameters are optional.

### Parameters

| Name | Description | Type | Location | Required
| - | - | - | - | - |
| first_name | First anme | string | body | false
| last_name | Lirst anme | string | body | false
| password | Password | string | body | false

### Responses

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | User data is updated. | -
| False | 404 | User by id={id} not found | -

<hr>
### Method endpoint
	DELETE /users/{id}

### Description
	Delete user data by given user id, where user id is required.

### Parameters

| Name | Description | Type | Location | Required
| - | - | - | - | - |
| id | User id | number | param | true

### Responses

| Success | Status Code | Message | Data
| - | - | - | - |
| True | 200 | User is deleted. | -
| False | 404 | User by id={id} not found | -



