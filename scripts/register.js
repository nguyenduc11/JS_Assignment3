'use strict';
// Variables declaration
const inputFirstname = document.querySelector('#input-firstname');
const inputLastname = document.querySelector('#input-lastname');
const inputUsername = document.querySelector('#input-username');
const inputPassword = document.querySelector('#input-password');
const inputPasswordConfirm = document.querySelector('#input-password-confirm');
const btnSubmit = document.querySelector('#btn-submit');
// Get form data function
function getFormData() {
  let formUserData = new User();
  formUserData.firstname = inputFirstname.value;
  formUserData.lastname = inputLastname.value;
  formUserData.username = inputUsername.value;
  formUserData.password = inputPassword.value;
  return formUserData;
}
// Add click event to submit button
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  let formData = getFormData();
  console.log(formData);
  // Validation Function
  function validateData() {
    let flagValidation = true;
    // 1st condition: all fields are required
    if (
      inputFirstname.value === '' ||
      inputLastname.value === '' ||
      inputUsername.value === '' ||
      inputPassword.value === '' ||
      inputPasswordConfirm.value === ''
    ) {
      alert('Please fill all inputs');
      return (flagValidation = false);
    }
    // 2nd condition: password length must greater than 8
    if (inputPassword.textLength <= 8) {
      alert(`password's length must greater than 8`);
      return (flagValidation = false);
    }
    // 3rd condition: password and confirm password matched
    if (inputPassword.value !== inputPasswordConfirm.value) {
      alert('Password not matched, please recheck your password');
      return (flagValidation = false);
    }
    // 4th condition: unique username
    userArr.some((item) => {
      if (item.username === inputUsername.value) {
        alert('Username already exists, please select a new one');
        return (flagValidation = false);
      }
    });
    return flagValidation;
  }
  let validationResult = validateData(formData);
  console.log(`Validation result is ${validationResult}`);
  // Process data if validation succeeded
  if (validationResult) {
    alert(
      'Congratulations, you have successfully registered a new account and can login now.'
    );
    userArr.push(formData);
    localStorage.setItem('USER_ARRAY', JSON.stringify(userArr));
    // Redirect Browser
    window.location.href = '../pages/login.html';
  }
  console.table(userArr);
  return userArr;
});
