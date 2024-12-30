const emailElm = document.querySelector('.js-email-field');
const fieldsElm = document.querySelectorAll('.js-fields');
const radiosElm = document.querySelectorAll('.js-radio');
const checkboxElm = document.querySelector('.js-checkbox');

const errorField = document.querySelectorAll('.js-error-field');
const errorEmail = document.querySelector('.js-error-email');
const errorRadio = document.querySelector('.js-error-radio');
const errorCheckbox = document.querySelector('.js-error-checkbox');

// remove error style when input focused
fieldsElm.forEach((elm, i) => {
  elm.addEventListener('click', () => {
    elm.classList.remove('red-border');
    errorField[i].classList.remove('display');
  });
});

emailElm.addEventListener('click', () => {
  emailElm.classList.remove('red-border');
  errorEmail.classList.remove('display');
});

radiosElm.forEach(elm => {
  elm.addEventListener('change', () => {
    errorRadio.classList.remove('display');
  });
});

checkboxElm.addEventListener('change', () => {
  errorCheckbox.classList.remove('display');
});

// add style to radio
const containersRadio = document.querySelectorAll('.js-radio-cont');
radiosElm.forEach((elm, i) => {
  elm.addEventListener('change', () => {
    // remove previos styles
    containersRadio.forEach(elm => {
      elm.classList.remove('checked');
    });

    containersRadio[i].classList.add('checked');
  });
});

// add checked icon to checkbox
const checkIcon = document.querySelector('.js-checkbox-icon');
checkboxElm.addEventListener('change', () => {
  checkboxElm.style.display = 'none';
  checkIcon.classList.add('display');
});

function unchecking() {
  checkboxElm.checked = false;
  checkboxElm.style.display = 'initial';
  checkIcon.classList.remove('display');
}

const labelCheckbox = document.querySelector('.js-label-checkbox');
checkIcon.addEventListener('click', unchecking);


// validatin inputs
function validation() {
  let validate = 0;

  fieldsElm.forEach((elm, i) => {
    if (!elm.value) {
      errorField[i].classList.add('display');
      elm.classList.add('red-border');
      validate++;
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailElm.value)) {
    errorEmail.classList.add('display');
    emailElm.classList.add('red-border');
    validate++;
  }

  const selectedRadio = document.querySelector('.js-radio:checked');
  if (!selectedRadio) {
    errorRadio.classList.add('display');
    validate++;
  }

  const checkedInput = document.querySelector('.js-checkbox:checked');
  if (!checkedInput) {
    errorCheckbox.classList.add('display');
    validate++;
  }

  return validate;
}

// remove styles from input
function removeStyle() {
  document.querySelectorAll('[class|="js-error"').forEach(elm => {
    elm.classList.remove('display');
  });

  document.querySelectorAll('input').forEach(elm => {
    elm.classList.remove('red-border');
  });

  document.querySelector('.checked').classList.remove('ckecked');
}

document.querySelector('.js-submit').addEventListener('click', () => {
  const validate = validation();

  const form = document.querySelector('form');
  if (!validate) {
    removeStyle();
    form.submit();
  }
});


















