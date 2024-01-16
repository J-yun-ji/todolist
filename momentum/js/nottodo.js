// Not To Do.
const notToDoForm = document.getElementById("nottodo-form");
const notToDoInput = notToDoForm.querySelector("input");
const notToDoList = document.getElementById("nottodo-container");

const NOTTODOS_KEY = "nottodos";

let notToDos = [];

function saveNotToDos() {
  localStorage.setItem("nottodos", JSON.stringify(notToDos));
}

// Todo delete.
function deleteNotToDo(event) {
  const box = confirm("Really delete this NotToDo?");
  if (box === true) {
    const delntdli = event.target.parentElement;
    notToDos = notToDos.filter(
      (notToDos) => notToDos.id !== parseInt(delntdli.id)
    );
    saveNotToDos();
    delntdli.remove();
    alert("NotToDo deleted!");
  } else {
    alert("NotToDo not deleted!");
  }
}

function deleteNotTodoButton(delntdbtnli) {
  const delNotTdBtn = document.createElement("button");
  delNotTdBtn.className = "delete";
  delNotTdBtn.innerText = "❌";
  delntdbtnli.appendChild(delNotTdBtn);
  delNotTdBtn.addEventListener("click", deleteNotToDo);
}

// NotTodo check.
function checkNotToDo(event) {
  const ckntdli = event.target.parentElement;
  const span = ckntdli.querySelector("span");
  const ckColor = ckntdli.querySelector(".check");
  let computedStyle = window.getComputedStyle(ckntdli).backgroundColor;

  if (computedStyle === "rgba(255, 255, 255, 0.56)") {
    ckntdli.style.backgroundColor = "rgba(138, 138, 138, 0.56)";
    ckColor.style.backgroundColor = "rgb(71, 71, 71)";
    ckColor.style.color = "rgb(241, 120, 120)";
    span.style.textDecorationLine = "line-through";
  } else {
    ckntdli.style.backgroundColor = "rgba(255, 255, 255, 0.56)";
    ckColor.style.backgroundColor = "rgb(255, 255, 255)";
    ckColor.style.color = "rgb(161, 178, 180)";
    span.style.textDecorationLine = "";
  }
}

function checkNotToDoButton(ckntdbtnli) {
  const ckNotTdBtn = document.createElement("button");
  ckNotTdBtn.className = "check";
  ckNotTdBtn.innerText = "✔";
  ckNotTdBtn.addEventListener("click", checkNotToDo);
  ckntdbtnli.appendChild(ckNotTdBtn);
}

// Todo create.
function paintNotToDo(newNotTodo) {
  const ntdli = document.createElement("li");
  ntdli.id = newNotTodo.id;
  ntdli.className = "alltodolist";
  const spanText = document.createElement("span");
  const spanTime = document.createElement("span");
  spanTime.id = "spantime";
  spanTime.style.fontSize = "15px";
  spanText.innerText = newNotTodo.text;
  spanTime.innerText = newNotTodo.time;
  deleteNotTodoButton(ntdli);
  checkNotToDoButton(ntdli);
  ntdli.appendChild(spanText);
  ntdli.appendChild(spanTime);
  notToDoList.appendChild(ntdli);
}

function handleNotToDoSubmit(event) {
  event.preventDefault();
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const time = `${year}.${month}.${day}. ${hours}:${minutes}:${seconds}`;

  const newNotTodo = notToDoInput.value;
  notToDoInput.value = "";
  const newNotTodoObj = {
    text: newNotTodo,
    id: Date.now(),
    time: time,
  };
  notToDos.push(newNotTodoObj);
  paintNotToDo(newNotTodoObj);
  saveNotToDos();
}

notToDoForm.addEventListener("submit", handleNotToDoSubmit);

const savedNotToDos = localStorage.getItem(NOTTODOS_KEY);

if (savedNotToDos !== null) {
  const parsedNotToDos = JSON.parse(savedNotToDos);
  notToDos = parsedNotToDos;
  parsedNotToDos.forEach(paintNotToDo);
}
