<h2>AJAX</h2>
<P>Asynchronous javascript and XML</P>
<p> Ajax is a set of web development techniques used to create interactive and dynamic web applications</p>
<p>The main idea behind Ajax is to allow web pages to retrieve and send data to a server asynchronously, without requiring a full page reload. This enables web applications to update parts of a page dynamically, without interrupting the user's interaction.</p>
<h5>More on this topic</h5>
<ol>
<li>JavaScript: JavaScript is the programming language used to handle client-side interactions and communicate with the server.</li>
<li>XMLHttpRequest (XHR): XMLHttpRequest is a JavaScript object that facilitates communication between the web browser and the server. It allows you to make HTTP requests from the client-side to the server and handle the server's responses.</li>
<li>XML or JSON: Initially, Ajax was often associated with using XML as the data format for communication between the client and server. However, nowadays, JSON (JavaScript Object Notation) has become more popular due to its lightweight and easy-to-parse nature.</li>
</ol>

<h4>Summary</h4>
<p>Ajax is widely used to build more responsive and interactive web applications, such as dynamic forms, real-time updates, and single-page applications (SPAs). Popular JavaScript frameworks and libraries like jQuery, Angular, React, and Vue.js have built-in features for handling Ajax requests, making it easier for developers to implement these functionalities.</p>

<h2>Methods</h2>
<p>The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.</p>
<p>The open() method is a crucial part of the XMLHttpRequest (XHR) object, which is used in JavaScript to send HTTP requests to a server and retrieve data from it asynchronously.</p>

<code>xhr.open(method, url[, async[, user[, password]]]);
</code>

<p>
method: The HTTP method to use for the request (e.g., "GET", "POST", "PUT", "DELETE", etc.).
url: The URL to which the request will be sent.
async (optional): A boolean value indicating whether the request should be asynchronous or not. Default value is true, meaning the request is asynchronous. If set to false, the request becomes synchronous, but synchronous requests are generally discouraged as they can freeze the user interface until the request completes.
user and password (optional): Credentials for HTTP authentication if required.
</p>
<p>we use the open() method to set up a GET request to the URL ></p>
<p>we send the request using the send() method.</p>
<h4>Note:</h4>
<p>After calling the open() method, you can set up event listeners to handle the server's response and track the progress of the request (e.g., onreadystatechange, onload, onerror, etc.). Also, remember that when dealing with modern web development, it is more common to use the newer fetch API or libraries like axios instead of directly working with XMLHttpRequest.</p>

<h5>XMLHttpRequest: readyState property</h5>
<p>The readyState property provides information about the current state of the request.</p>
<p>0 (UNSENT): The XMLHttpRequest object has been created, but the open() method has not been called yet.

1 (OPENED): The open() method has been called, and the request has been initialized, but the send() method has not been called yet.

2 (HEADERS_RECEIVED): The send() method has been called, and the request headers and status are available. The response status code and headers can be accessed using the status and getAllResponseHeaders() methods, respectively.

3 (LOADING): The response is being received. Partial data is available through the responseText or responseXML properties, depending on the response type.

4 (DONE): The operation is complete, and the response data is available. The entire response can be accessed via the responseText or responseXML properties.</p>

<code>const xhr = new XMLHttpRequest();
xhr.open("GET", "./api/sample.txt");
// console.log(xhr);
xhr.onreadystatechange = () => {
if (xhr.readyState === 4 && xhr.status === 200) {
console.log(xhr.responseText);
const text = document.createElement("p");
text.textContent = xhr.responseText;
document.body.appendChild(text);
} else {
console.log({
status: xhr.status,
readyState: xhr.readyState,
text: xhr.statusText,
});
}
console.log(xhr);
};
xhr.send();
</code>

<p>we create an XMLHttpRequest object and set up an event listener to handle the response. </p>
<p>, the send() method is called to initiate the request and send it to the server.</p>
<p>After calling send(), the XMLHttpRequest object will start communicating with the server asynchronously. As the server responds, the event listener we set up will be triggered, and the response data can be handled accordingly in the function.</p>
<p>Yes, you are correct! The send() method is used in XMLHttpRequest (XHR) to send the HTTP request to the server after the request has been set up using the open() method. It is a crucial step in the process of making an asynchronous HTTP request.</p>

<p>SUMMARY: Asynchronous requests are essential for creating responsive web applications, as they allow the page to continue functioning without waiting for the server response, enhancing the user experience.</p>
