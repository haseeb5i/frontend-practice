// there is window object in the browser, which is the parent element of the browser
// there is document object in the browser, which represents current html as a DOM
// we can manipulate the html using this DOM or document object, DOM is part of window object

// single element selectors
console.log("hello");
const form = document.getElementById("my-form");
console.log(document.querySelector(".container")); // new to js, select elemts using css

// multiple element selectors
const items = document.querySelectorAll(".item"); // get all matching elements
items.forEach((item) => console.log(item));
// console.log(document.getElementsByClassNamequerySelectorAll("item")); // get all elements with the clas name, not preffered now
// console.log(document.getElementsById(".item")); // get all matching elements by tag name, not preffered

//-----------------------//
const ul = document.querySelector(".items");
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello from JS";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// attach event listners to object nodes or html elemnts,
// first argument is the event and the second is function to call
// event object can be passed to the function
// as an argument and can be manipulated from there
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log("clicked");
});
