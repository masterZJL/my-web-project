let myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector("img");
myImage.onClick = function() {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/smile.jpg") {
		myImage.setAttribute("src", "images/sexsy.jpg");	
	} else {
		myImage.setAttribute("src", "images/smile.jpg");
	}
}


sessionStorage.setItem("key", "value");
let data = sessionStorage.getItem("key");
console.log(data)
sessionStorage.removeItem("key");
sessionStorage.clear();


let myButton = document.querySelector("button");
function setUsername() {
	let myName = prompt("请输入您的名字：");
	if (myName === undefined || myName === null) {
		setUsername()
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = "Hello, " + myName;
	}
}
if(!localStorage.getItem("name")) {
	setUsername();
} else {
	let myName = localStorage.getItem("name");
	myHeading.textContent = "Hello, " + myName;
}
myButton.onclick = function() {
	setUsername();
}