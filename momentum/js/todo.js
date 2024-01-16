// To do.
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-container");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// Todo delete.
function deleteToDo(event) {
  const box = confirm("Really delete this ToDo?");
  if (box === true) {
    const dlli = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(dlli.id));
    saveToDos();
    dlli.remove();
    alert("Todo deleted!");
  } else {
    alert("Todo not deleted.");
  }
}

function deleteButton(dbli) {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "❌";
  dbli.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteToDo);
}

// Todo check.
function checkToDo(event) {
  const ckli = event.target.parentElement;
  const span = ckli.querySelector("span");
  const ckColor = ckli.querySelector(".check");
  let computedStyle = window.getComputedStyle(ckli).backgroundColor;

  if (computedStyle === "rgba(255, 255, 255, 0.56)") {
    ckli.style.backgroundColor = "rgba(138, 138, 138, 0.56)";
    ckColor.style.backgroundColor = "rgb(71, 71, 71)";
    ckColor.style.color = "rgb(241, 120, 120)";
    span.style.textDecorationLine = "line-through";
  } else {
    ckli.style.backgroundColor = "rgba(255, 255, 255, 0.56)";
    ckColor.style.backgroundColor = "rgb(255, 255, 255)";
    ckColor.style.color = "rgb(161, 178, 180)";
    span.style.textDecorationLine = "";
  }
}

function checkButton(cbli) {
  const checkBtn = document.createElement("button");
  checkBtn.className = "check";
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", checkToDo);
  cbli.appendChild(checkBtn);
}

// Todo create.
function paintToDo(newTodo) {
  const tdli = document.createElement("li");
  tdli.id = newTodo.id;
  tdli.className = "alltodolist";
  const spanText = document.createElement("span");
  const spanTime = document.createElement("span");
  spanTime.id = "spantime";
  spanTime.style.fontSize = "15px";
  spanText.innerText = newTodo.text;
  spanTime.innerText = newTodo.time;
  deleteButton(tdli);
  checkButton(tdli);
  tdli.appendChild(spanText);
  tdli.appendChild(spanTime);
  toDoList.appendChild(tdli);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const time = `${year}.${month}.${day}. ${hours}:${minutes}:${seconds}`;

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    time: time,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
