'use strict';
// Variables declaration
const loginModal = document.querySelector('#login-modal');
const mainContent = document.querySelector('#main-content');
const welcomeMessage = document.querySelector('#welcome-message');
const btnLogout = document.querySelector('#btn-logout');
// console.log(loginModal);
// console.log(btnLogout);

// Render Home Page function
function renderHomePage() {
  if (currentUser !== null && currentUser !== undefined) {
    loginModal.style.display = 'none';
    mainContent.style.display = 'block';
    welcomeMessage.innerHTML = `Welcome ${currentUser.username}`;
    welcomeMessage.style.fontStyle = 'italic';
    welcomeMessage.style.fontWeight = 'bold';
    welcomeMessage.style.color = 'red';
  } else {
    loginModal.style.display = 'block';
    mainContent.style.display = 'none';
    btnLogout.style.display = 'none';
  }
}
renderHomePage();
// Add Click Event to Logout Button
btnLogout.addEventListener('click', () => {
  const logoutFlag = confirm('Do you want to log out?');
  if (logoutFlag) {
    currentUser = null;
    localStorage.setItem('CURRENT_USER', currentUser);
    renderHomePage();
  }
});
