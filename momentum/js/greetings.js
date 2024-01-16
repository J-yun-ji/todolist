const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginafter = document.querySelector("#loginafter");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.className = "hidden";
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

// 로그아웃.
function onLogoutSubmit(event) {
  event.preventDefault();
  loginafter.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
  greeting.innerText = "";
  localStorage.removeItem(USERNAME_KEY, "");
}

// 이름 인사 표시 및 투두 hidden 제거.
function paintGreetings(username) {
  loginForm.className = "hidden";
  loginafter.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Good Morning ! ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetins
  paintGreetings(savedUsername);
}

logoutBtn.addEventListener("click", onLogoutSubmit);
