
const emailElm = document.querySelector('.js-email-field');
const submitBtn = document.querySelector('.js-submit');
const form = document.querySelector('form');

submitBtn.addEventListener('click', validation);

function validation() {
  let validate = 0;
  const fieldsElm = document.querySelectorAll('.js-fields');
  const errorField = document.querySelectorAll('.js-error-field');
  fieldsElm.forEach((elm, i) => {
    if (!elm.value) {
      errorField[i].classList.add('display');
      elm.classList.add('red-border');
      validate++;
    }
  });

  const errorEmail = document.querySelector('.js-error-email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailElm.value)) {
    errorEmail.classList.add('display');
    emailElm.classList.add('red-border');
    validate++;
  }

  const selectedRadio = document.querySelector('.js-radio:checked');
  const errorRadio = document.querySelector('.js-error-radio');
  if (!selectedRadio) {
    errorRadio.classList.add('display');
    validate++;
  }

  const checkedInput = document.querySelector('.js-checkbox:checked');
  const errorCheckbox = document.querySelector('.js-error-checkbox');
  if (!checkedInput) {
    errorCheckbox.classList.add('display');
    validate++;
  }

  return validate;
}

















