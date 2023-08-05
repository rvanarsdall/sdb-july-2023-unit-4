let myTodoListItems = ["trash", "put kids to bed"];

let todoItemList = document.getElementById("todo-item-list"); // PARENT

let addItemButton = document.getElementById("add-item");

let clearButton = document.getElementById("clear");

let inputItem = document.getElementById("input-item");

clearButton.addEventListener("click", () => {
  myTodoListItems = [];
  clearTodoList();
});

addItemButton.addEventListener("click", () => {
  /* 
 - Add the item typed in the input field to be added to our list    
 - Display our todo items
- Clear the input field
 */
  myTodoListItems.push(inputItem.value);
  inputItem.value = "";
  displayTodoItems();
});

function displayTodoItems() {
  /* 
In order to create elements you must do the following:

1) Identify the parent
2) create the element tags
3) What do we want to put in between the tags
4) Append what we were creating to the parent

*/
  clearTodoList();
  myTodoListItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.className = "todo-item";
    todoItemList.appendChild(listItem);
  });

  let todoItems = document.getElementsByClassName("todo-item");

  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].textContent.toLowerCase().includes("help")) {
      todoItems[i].style.color = "red";
    } else {
      todoItems[i].style.color = "green";
    }
  }
}

function start() {
  myTodoListItems = [];
  clearTodoList();
  displayTodoItems();
}

start();

function clearTodoList() {
  while (todoItemList.hasChildNodes()) {
    todoItemList.removeChild(todoItemList.firstChild);
  }
}
