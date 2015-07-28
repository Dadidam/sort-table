# Sort Table

Sort Table is a ReactJS component that allows you to create a sortable
table just by passing in a basic JSON array of objects. The first layer of the
JSON objects in the array needs to contain sortable items (ie integers, floats,
strings, etc.) I have not tried with nested objects so use those at your
own risk.

---
### Basic Useage

To use the component pass a JSON array similar to:
```
var els = JSON.stringify([
	{
		"name": "Buster",
		"age": 34,
		"occupation": "army"
	},
	{
		"name": "Lindsay",
		"age": 37,
		"occupation": "socialite"
	},
	{
		"name": "G.O.B.",
		"age": 36,
		"occupation": "illusionist"
	}
]);
```
Next, pass this object to the component:
```

<SortTable elements={els} />

```

### Advanced Options

You can specify which columns you want to show on the table by passing an array of strings to the `keys` attribute:

```

<SortTable keys={['name', 'age']} elements={els} />

```
**Note:** If you do not pass in the keys attribute, the component will assume the keys of the first element in the array are the columns.