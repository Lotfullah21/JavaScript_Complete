## Click

The click event is an event that gets triggered when an element is clicked by the user. You can handle this event using either the addEventListener method or by setting the onclick property of the element.

As you can see, the function is not called, otherwise the moment the document is loaded, the function gets executed and that is a behavior that I don't want.

```js
btn.addEventListener("click", changeBackground);
```
