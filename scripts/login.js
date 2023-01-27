'use strict';
// Variables declaration
const inputUsername = document.querySelector('#input-username');
const inputPassword = document.querySelector('#input-password');
const btnSubmit = document.querySelector('#btn-submit');
// Add click event to Login button
btnSubmit.addEventListener('click', () => {
  // Validate inputs
  function validateUser() {
    let validationFlag = true;
    if (inputUsername.value === '') {
      alert('Please enter your username');
      return (validationFlag = false);
    }
    if (inputPassword.value === '') {
      alert('Please enter your password');
      return (validationFlag = false);
    }
    return validationFlag;
  }
  const validationResult = validateUser();
  console.log(`Validation result is ${validationResult}`);
  if (validationResult) {
    const user = userArr.find((item) => {
      return (
        item.username === inputUsername.value &&
        item.password === inputPassword.value
      );
    });
    if (user) {
      alert('Login successfully');
      console.log(`hello ${user.username}`);
      localStorage.setItem('CURRENT_USER', JSON.stringify(user));
      // Redirect Browser
      window.location.href = '../index.html';
    } else {
      alert('Login failed, incorrect Username or Password, please try again');
    }
  }
});
