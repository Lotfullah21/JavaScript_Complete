## Document object model

The Document Object Model (DOM) is a hierarchical tree structure representing the elements of an HTML or XML document. Each node in this tree represents a part of the document, such as an element, attribute, or text content. Using JavaScript, you can interact with these nodes to dynamically change the structure, style, or content of a web page. This interaction allows for dynamic web pages where content can change without needing to reload the entire page.

## window object

The window object represents the browser's window or frame that displays the web page. It acts as the global object in the browser environment, providing various methods and properties to control the browser, such as managing the browser history, controlling windows and frames, and handling events. The window object is often referred to as the browser API because it provides the interface for interacting with the browser itself.

## document

The document object is a property of the window object and represents the HTML or XML document loaded in the browser window. It provides methods and properties that allow you to access and manipulate the content and structure of the web page. Through the document object, you can modify the DOM, retrieve elements, add or remove content, and listen to or trigger events related to the page.

An HTML page is considered a document, and this document is represented by the document object in JavaScript. This object serves as the entry point to the content of the page, enabling interaction with the HTML structure.

To see the whole methods and properties within the document, open the html with a browser and open the page source or press `control+shift+c`

```js
console.dir(document);
```
