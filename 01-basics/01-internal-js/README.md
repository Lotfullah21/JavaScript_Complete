# Internal Javascript

We can add java script inside our html file.

## Option-1

Adding each js code inside an element

```html
<button onclick="alert('سلام جهان')">click me</button>
<button onclick="alert('Hello Kabul')">click me</button>
```

## Option-2

Adding js code inside `<script></script>` inside our html body and that is accessible through out our html document.

```js
	<button class="btn">click me</button>
		<script>
			document.querySelectorAll(".btn").forEach((item) => {
				item.addEventListener("click", () => {
					alert("hello world");
				});
			});
		</script>
```

Its advantage over the first option is, it makes our job easier and in one place we can control the functionality.

Always, place your `<script>` at the bottom, because if there is a big application, browser instead of loading the html first, will focus on parsing the java script and that creates a lazy loading application.
