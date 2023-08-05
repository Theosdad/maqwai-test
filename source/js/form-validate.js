const form = document.getElementById('form');
const usernameInput = document.getElementById('modal-username');
const userphoneInput = document.getElementById('modal-userphone');
const emailInput = document.getElementById('modal-email');
let isUsernameValid = false;
let isUserphoneValid = false;
let isEmailValid = false;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

usernameInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim();
  isUsernameValid = isValidNameInput(inputValue);
  if (!isUsernameValid) {
    setErrorFor(usernameInput, 'Введите имя на кириллице или латинице');
  } else {
    setSuccessFor(usernameInput);
  }
});

userphoneInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  isUserphoneValid = isValidPhoneInput(inputValue);
  if (!isUserphoneValid) {
    setErrorFor(userphoneInput, 'Корректный формат - 11 цифр');
  } else {
    setSuccessFor(userphoneInput);
  }
});

emailInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  isEmailValid = isValidEmailInput(inputValue);
  if (!isEmailValid) {
    setErrorFor(emailInput, 'Введите корректный адрес электронной почты');
  } else {
    setSuccessFor(emailInput);
  }
});

const validateForm = () => {
  if (isUsernameValid && isUserphoneValid && isEmailValid) {
    form.submit();
  }
}

const setErrorFor = (input, message) => {
  const inputWrapper = input.parentElement;
  const errorSpan = inputWrapper.querySelector('.error-message');
  if (errorSpan) {
    errorSpan.innerText = message;
  } else {
    const newErrorSpan = document.createElement('span');
    newErrorSpan.innerText = message;
    newErrorSpan.className = 'error-message';
    inputWrapper.appendChild(newErrorSpan);
  }
  inputWrapper.classList.add('error');
}

const setSuccessFor = (input) => {
  const inputWrapper = input.parentElement;
  const errorSpan = inputWrapper.querySelector('.error-message');
  if (errorSpan) {
    inputWrapper.removeChild(errorSpan);
  }
  inputWrapper.classList.remove('error');
}

const isValidNameInput = (inputValue) => {
  const namePattern = /^[A-Za-zА-Яа-яЁё\s]*$/;
  return namePattern.test(inputValue);
}

const isValidPhoneInput = (inputValue) => {
  const phonePattern = /^\d*$/;
  return phonePattern.test(inputValue) && inputValue.length === 11;
}

const isValidEmailInput = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
