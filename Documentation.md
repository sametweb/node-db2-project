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

### GET: _/api/cars_

Returns a collection (array) of cars.

### GET: _/api/cars/:id_

Returns an object containing specified car's information.

### POST: _/api/cars_

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
