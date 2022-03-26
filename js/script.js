const elem = {
  form: document.querySelector('.reg-form'),
  btn: document.querySelector('.btn__submit'),
  input: [
    document.querySelector('.input__first-name'),
    document.querySelector('.input__last-name'),
    document.querySelector('.input__email'),
    document.querySelector('.input__password'),
  ],
  errMsgBox: [
    document.querySelector('.input__first-name__error'),
    document.querySelector('.input__last-name__error'),
    document.querySelector('.input__email__error'),
    document.querySelector('.input__password__error'),
  ],
};
const errMsg = {
  firstName: 'First Name cannot be empty',
  lastName: 'Last Name cannot be empty',
  email: {
    empty: 'Email Address cannot be empty',
    invalid: 'Looks like this is not an email',
  },
  password: 'Password cannot be empty',
};
const clr = {
  red: 'hsl(0, 93%, 68%)',
  grayishBlue: '#ce9797',
};

const getMsg = (className) => {
  switch (className) {
    case 'input__first-name':
      return errMsg.firstName;
      break;
    case 'input__last-name':
      return errMsg.lastName;
      break;
    case 'input__email':
      return errMsg.email.invalid;
      break;
    case 'input__password':
      return errMsg.password;
      break;
    default:
      return;
  }
};

const showError = (inputElem) => {
  const msgBox = inputElem.nextElementSibling;
  const isEmail = inputElem.classList.contains('input__email');
  const className = inputElem.classList[0];
  inputElem.style.border = `0.1rem solid ${clr.red}`;
  inputElem.classList.add('error');
  msgBox.removeAttribute('hidden');
  if (isEmail) {
    if (inputElem.value === '') {
      msgBox.innerHTML = errMsg.email.empty;
    } else {
      msgBox.innerHTML = errMsg.email.invalid;
    }
  } else {
    msgBox.innerHTML = getMsg(className);
  }
};

const reset = (inputElem) => {
  const valid = elem.form.checkValidity();
  const msgBox = inputElem.nextElementSibling;
  if (valid) {
    inputElem.value = '';
  }
  inputElem.style.border = `0.01rem solid ${clr.grayishBlue}`;
  msgBox.setAttribute('hidden', '');
  inputElem.classList.remove('error');
};

const submitForm = () => {
  alert('Email Address submitted!');
};

const validate = () => {
  const validList = elem.form.querySelectorAll(':valid');
  const invalidList = elem.form.querySelectorAll(':invalid');
  validList.forEach((inputElem) => {
    if (!inputElem.classList.contains('btn__submit')) {
      reset(inputElem);
    }
  });
  invalidList.forEach((inputElem) => {
    showError(inputElem);
  });
  return elem.form.checkValidity();
};

elem.btn.addEventListener('click', (e) => {
  e.preventDefault();
  const valid = validate();
  if (valid) {
    submitForm();
    elem.input.map((item) => {
      reset(item);
    });
  }
});
