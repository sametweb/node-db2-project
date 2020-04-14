## `cars` table

| column name  | info                 | data type |
| ------------ | -------------------- | --------- |
| id           | auto_increment       | int       |
| VIN          | not nullable, unique | string    |
| make         | not nullable         | string    |
| model        | not nullable         | string    |
| milage       | not nullable         | integer   |
| transmission | nullable             | string    |
| title_status | nullable             | string    |

## Endpoints

### GET: /api/cars

Returns a collection (array) of cars.

### GET: /api/cars/:id

Returns an object containing specified car's information.

### POST: /api/cars

Body:

```javascript
{
	"VIN": "ASDFGHWERTYU12345",
	"make": "Mercedes",
	"model": "E180",
	"milage": 125000,
	"transmission": "auto",
	"title_status": "clean"
}
```

Returns newly added car object.

### PATCH: /api/cars/:id

Body:

```javascript
{
	"VIN": "ASDFGHWERTYU12345",
	"make": "Mercedes",
	"model": "E180",
	"milage": 125000,
	"transmission": "auto",
	"title_status": "clean"
}
```

Returns updated car object.

### DELETE: /api/cars/:id

Returns 200 HTTP Status if the request is successful.
