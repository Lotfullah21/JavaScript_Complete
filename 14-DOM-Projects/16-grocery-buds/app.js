// ######### Select Items  ###########

const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const item = document.getElementById("item-input");
const submitBtn = document.querySelector(".btn-submit");
const container = document.querySelector(".items-container");
const list = document.querySelector(".items-list");
const clearBtn = document.querySelector(".btn-clear");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ######### Event listeners ###########
// Submit the form
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setUpItemsFromStorage);

// ######### Functions ###########

function addItem(e) {
	e.preventDefault();
	const value = item.value;
	const id = new Date().getTime().toString();
	console.log(value, id);
	if (value && !editFlag) {
		createItems(id, value);
		displayAlert("Subject added to the list", "success");
		container.classList.add("show-container");
		// add to local storage
		addToLocalStorage(id, value);
		// set back to default
		setBackToDefault();
	} else if (value && editFlag) {
		editElement.innerHTML = value;
		displayAlert("Item edited", "success");
		// edit local storage
		editLocalStorage(editId, value);
		setBackToDefault();
	} else {
		displayAlert("please enter a value", "danger");
	}
}

// display alert
function displayAlert(text, action) {
	alert.textContent = `${text}`;
	alert.classList.add(`alert-${action}`);

	// Remove alert message after 1000ms
	setTimeout(function () {
		alert.textContent = "";
		alert.classList.remove(`alert-${action}`);
	}, 1000);
}
// set back to default
function setBackToDefault() {
	item.value = "";
	editFlag = false;
	editId = "";
	submitBtn.textContent = "submit";
}

// Clear all items
function clearItems() {
	const items = document.querySelectorAll(".item");
	if (items.length > 0) {
		items.forEach(function (ele) {
			list.removeChild(ele);
		});
	}
	container.classList.remove("show-container");
	displayAlert("All items cleared", "success");
	setBackToDefault();
	localStorage.removeItem("list");
}

function deleteItem(e) {
	// get the parent of parent  current btn which is
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	list.removeChild(element);
	if (list.children.length === 0) {
		container.classList.remove("show-container");
	}
	displayAlert("Item removed", "danger");
	setBackToDefault();
	// remove from local storage
	removeFromLocalStorage(id);
}
function editItem(e) {
	element = e.currentTarget.parentElement.parentElement;
	// set edit item
	// get the item with class task
	editElement = e.currentTarget.parentElement.previousElementSibling;
	// set the input form value
	item.value = editElement.innerHTML;
	editFlag = true;
	editId = element.dataset.id;
	submitBtn.textContent = "edit";
}

// ######### Local Storage  ###########

function addToLocalStorage(id, value) {
	const item = { id: id, value: value };
	let items = getLocalStorage();
	items.push(item);
	localStorage.setItem("list", JSON.stringify(items));
	console.log("from local", item);
}

// get the items from local storage
function getLocalStorage() {
	return localStorage.getItem("list")
		? JSON.parse(localStorage.getItem("list"))
		: [];
}

// edit local storage
function editLocalStorage(editId, value) {
	let items = getLocalStorage();
	items = items.map(function (item) {
		if (item.id === editId) {
			item.value = value;
		}
		return item;
	});
	localStorage.setItem("list", JSON.stringify(items));
}

// get the item from storage and show it
function setUpItemsFromStorage() {
	let items = getLocalStorage();
	if (items.length > 0) {
		items.forEach(function (item) {
			createItems(item.id, item.value);
		});
		container.classList.add("show-container");
	}
}

// To create items dynamically
function createItems(id, value) {
	const element = document.createElement("article");
	// add the class
	element.classList.add("item");
	// add id
	let attr = document.createAttribute("data-id");
	attr.value = id;
	// add the attribute to the element.
	element.setAttributeNode(attr);
	element.innerHTML = `	<h5 class="task">${value}</h5>
	<div class="button-container">
		<button class="edit"><i class="fas fa-edit"></i></button>
		<button class="delete"><i class="fas fa-trash"></i></button>
	</div>`;
	const editBtn = element.querySelector(".edit");
	const deleteBtn = element.querySelector(".delete");
	deleteBtn.addEventListener("click", deleteItem);
	editBtn.addEventListener("click", editItem);
	// append to the list
	list.appendChild(element);
}

// remove from local storage
function removeFromLocalStorage(id) {
	let items = getLocalStorage();
	items = items.filter(function (item) {
		return item.id !== id;
	});
	localStorage.setItem("list", JSON.stringify(items));
}
