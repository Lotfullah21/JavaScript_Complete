## Event Object

The event object in JavaScript provides information about the event that just occurred. It is automatically passed to event handlers and contains properties and methods you can use to get more details about the event and manipulate it.

The event object can be written as as event,e,evt.

It gives information about Triggered events.

### Methods:

event.type

#### event.currentTarget

```js
btn.addEventListener("click", function (event) {
	console.log(event.currentTarget);
	event.currentTarget.classList.add("red");
});
```

preventDefault() => it prevents default behavior

## target vs. currentTarget

## target

Definition: The target property of the event object refers to the element that actually triggered the event. It's the deepest (most specific) element in the DOM hierarchy that the event originated from.
Usage: It's commonly used when you want to know exactly which element was interacted with, especially in cases of event delegation.

## currentTarget

Definition: The currentTarget property refers to the element to which the event handler is attached. It's useful in event delegation when the handler is attached to a parent element, but you want to interact with the element that the handler was intended for.
Usage: It remains consistent regardless of which descendant element was clicked because it always refers to the element that the event listener was added to.

```js
<div id="parent">
    <button id="child">Click Me!</button>
</div>

<script>
    const parent = document.getElementById('parent');

    parent.addEventListener('click', function(event) {
        console.log("target:", event.target); // Logs the element that was clicked (e.g., the button)
        console.log("currentTarget:", event.currentTarget); // Always logs the parent div
    });
</script>

```

## event.preventDefault()

The preventDefault() method is used to prevent the default action that belongs to the event. For example, it can prevent a form from submitting, a link from navigating, or a checkbox from being checked.
Usage: It’s useful when you want to handle an ev.

```js
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
	console.log("form submitted");
	// e.preventDefault();
	console.log(password.value);
	console.log(nameInput.value);
});
```

For instance, by default when we submit the form, the content will be sent to a server or an external link using `action` attribute.
But, we can avoid that to grab the values.

## this

In an event handler, this refers to the element to which the event handler is attached. It's equivalent to event.currentTarget in the context of the event handler.

Refers to the element to which the event listener is attached, the same as currentTarget within the event handler.
