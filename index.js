const container = document.getElementById("container");
const input = container.children[0];
const time = container.children[1];
const todo_container = document.getElementById("item-container");

function unShift(element) {
  const removedElements = [];
  while (todo_container.children.length != 0) {
    removedElements.push(todo_container.lastChild);
    todo_container.removeChild(todo_container.lastChild);
  }
  todo_container.appendChild(element);
  while (removedElements.length != 0) {
    todo_container.appendChild(removedElements.pop());
  }
}
function addTask() {
  let div = document.createElement("div");
  div.className = "todo-item";
  let p1 = document.createElement("p");
  p1.innerHTML = input.value;
  let p2 = document.createElement("p");
  p2.innerHTML = time.value;
  if (input.value && time.value) {
    div.appendChild(p1);
    div.appendChild(p2);
  }
  let button = document.createElement("button");
  button.setAttribute("onclick", "deleteElement(this)");
  let span = document.createElement("span");
  span.className = "material-icons";
  span.innerText = "delete_outline";
  button.appendChild(span);
  div.appendChild(button);
  unShift(div);
}
function deleteElement(element) {
  var div = element.parentNode;
  div.remove();
}
