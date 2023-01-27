'use strict';
// USER_ARRAY
// Create userArr array from localStorage
const KEY = 'USER_ARRAY';
let userArr = localStorage.getItem(KEY)
  ? JSON.parse(localStorage.getItem(KEY)).map((item) => parseUser(item))
  : [];
console.table(userArr);
// Parser function to convert user object to User class instance
function parseUser(obj) {
  if (obj !== null && obj !== undefined) {
    const user = new User(
      obj.firstname,
      obj.lastname,
      obj.username,
      obj.password,
      obj.pageSize,
      obj.category
    );
    return user;
  }
}

// CURRENT_USER
// Create current user from local storage
let currentUser = localStorage.getItem('CURRENT_USER')
  ? parseUser(JSON.parse(localStorage.getItem('CURRENT_USER')))
  : null;
console.log(currentUser);
console.log(currentUser instanceof User);

// TODO_ARRAY
// parser todoArr
function parseTask(obj) {
  if (obj !== null && obj !== undefined) {
    const task = new Task(obj.task, obj.owner, obj.isDone);
    return task;
  }
}
// Create todoArr from local storage
const todoArr = localStorage.getItem('TODO_ARRAY')
  ? JSON.parse(localStorage.getItem('TODO_ARRAY')).map((item) =>
      parseTask(item)
    )
  : [];
