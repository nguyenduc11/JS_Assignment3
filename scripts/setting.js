'use strict';
if (currentUser) {
  const inputPageSize = document.getElementById('input-page-size');
  const inputCategory = document.getElementById('input-category');
  const btnSubmit = document.getElementById('btn-submit');
  // Add Click Event to Save Settings Button
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    currentUser.setPageSize = inputPageSize.value;
    currentUser.setCategory = inputCategory.value;
    let userIndex = userArr.findIndex(
      (user) => user.username === currentUser.username
    );
    userArr[userIndex] = currentUser;
    // console.table(currentUser);
    // console.table(userArr);
    localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));
    localStorage.setItem('USER_ARRAY', JSON.stringify(userArr));
    alert('You have successfully updated your settings');
  });
}
