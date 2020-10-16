var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn = document.getElementsByClassName("delete");

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.innerHTML = "Delete";
	li.appendChild(button);
	button.setAttribute("class","delete");
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeOrDelete(event)
{
	console.log("Hi");
	var target = getEventTarget(event);
	if(target.classList[0] === "delete" ){
		target.parentElement.parentElement.removeChild(target.parentElement);
	}
	else {
		target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick = strikeOrDelete;

