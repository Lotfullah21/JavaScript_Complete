## Nested objects

Objects can be created inside other objects and it can have the same nama as its above level objects, name collision will not happen like global or local variable.

## dot vs bracket (. vs [])

```js
const hooshmandlab = {
	name: "Hooshmandlab",
	"random-value": "random",
};
```

Now, using dot we cannot have access to `random-value`, but using bracket we can.

```js
 hooshmandlab."random-value"

```

```js
hooshmandlab["random-value"];
```
