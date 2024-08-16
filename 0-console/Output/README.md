Unlike other languages, we do not have built-in print functions.

We can show the output by the following methods

1. the browser console console.log() // console.log("hello there")
   --- Write the data directly into the browser console
   --- it provides debugging information for HTML, JS, CSS
   --- console.log("Hello, there")

2. HTML output using window.prompt()
   --- prompt("Enter your name")
   --- similar to alert but wants some input from the user

3. an alert box window.alert() // alert("Hello there")
   --- a pop up window which shows the message in the screen
   --- alert("Hello there")

4. HTML element using innerHTML() // h1.innerHTML("hello there")
   --- to change the contents of a specific element(p,h) or specific classes (.class) or specific ids (#id) we use this
   method. we can take advantage of APIs to get into specific DOM elements and change its content.
   --- element.getElementById("#first").innerHTML = "Hello there"

5. HTML output using document.write() // document.write("hello there")
   --- it writes the information directly to the page and will be there permanently, NOT RECOMENDED METHOD,since it can be misused
   --- document.write("WELCOME")
