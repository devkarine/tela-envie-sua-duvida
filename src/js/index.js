const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const doubt = document.getElementById("doubt");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

email.addEventListener("blur", () => {
  checkInputemail();
});

username.addEventListener("blur", () => {
  checkInputUserName();
});

function checkInputUserName() {
  const usernameValue = username.value;
  if (usernameValue === "") {
    errorInput(username, "Campo obrigatório");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content correct";
  }
}

function checkInputemail() {
  const emailValue = email.value;
  if (emailValue === "") {
    errorInput(email, "Campo obrigatório");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content correct";
  }
}

function checkInputphone() {
  const phoneValue = phone.value;
  if (phoneValue === "") {
    errorInput(phone, "Campo obrigatório");
  } else {
    const formItem = phone.parentElement;
    formItem.className = "form-content correct";
  }
}

function checkInputdoubt() {
  const doubtValue = doubt.value;
  if (doubtValue === "") {
    errorInput(doubt, "Campo obrigatório");
  } else {
    const formItem = doubt.parentElement;
    formItem.className = "form-content correct";
  }
}

function checkForm() {
  checkInputUserName();
  checkInputemail();
  checkInputphone();
  checkInputdoubt();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("Mensagem enviada com sucesso!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");
  console.log(textMessage);

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
