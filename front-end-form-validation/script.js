const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// event listeners

// submit event fires when the user clicks a submit button in a form, submit event fires on form element itself

// preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else {
    showSuccess(username);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(username);
  }
  if (password2.value === "") {
    showError(password2, "Confirm password is required");
  } else {
    showSuccess(username);
  }
});
