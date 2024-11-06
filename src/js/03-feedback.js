import throttle from "lodash.throttle";

// Selectează formularul și câmpurile din formular
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funcția de salvare a stării formularului în localStorage
const saveFormState = throttle(function () {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Salvează în localStorage
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500);

form.addEventListener("input", saveFormState);
window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

  if (savedData) {
    emailInput.value = savedData.email || "";
    messageInput.value = savedData.message || "";
  }
});

// Gestionarea evenimentului de submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  // Șterge datele din localStorage după trimiterea formularului
  localStorage.removeItem("feedback-form-state");

  form.reset();
});
