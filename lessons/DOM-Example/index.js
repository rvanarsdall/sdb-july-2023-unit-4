console.log("it works from index.js");

let header = document.getElementById("main-header");
console.log(header);

// ? How can we change color
header.style.color = "red";

// ? How can I change the text that is displayed:

header.textContent = "Rob's Todo List";
// TODO: Change the h3 text to chores
/* 
- give the h3 an ID
- store it as a variable in the JS
- change it to chores using innerHTML
*/

let category = document.getElementById("category");
// ! if you want to convert html that is inside your string use innerHTML
category.innerHTML = "<em>Chores</em>";

let todoItems = document.getElementsByClassName("todo-item");

console.log(todoItems);

// ! getElementsByClassName
// How to loop through HTML Collection
// ? If the item as the word help in it change the style to red.
for (let i = 0; i < todoItems.length; i++) {
  if (todoItems[i].textContent.toLowerCase().includes("help")) {
    todoItems[i].style.color = "red";
  } else {
    todoItems[i].style.color = "green";
  }
}

// ! getElementsByTagName

let pTags = document.getElementsByTagName("p");
console.log(pTags);
pTags[0].style.fontStyle = "italic";

// ! querySelector
// NOTE: gives you the first element that meets the requirement (CSS Selector)

let todoItemQuerySelector = document.querySelector(".todo-item");

console.log(todoItemQuerySelector);

let headerQuerySelector = document.querySelector("#main-header");
console.log(headerQuerySelector);

// ! querySelectorAll()
// NOTE: Selects all elements that match a specific CSS selector, returning a NodeList.

let todoQuerySelectorAll = document.querySelectorAll(".todo-item");

todoQuerySelectorAll.forEach((todoItem) => console.log(todoItem.textContent));
