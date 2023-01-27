'use strict';
// Variables declaration
const todoList = document.getElementById('todo-list');
const inputTask = document.getElementById('input-task');
const btnAdd = document.getElementById('btn-add');
// Render to do list function
function renderTodoList() {
  let renderContent = '';
  const todoItem = todoArr.filter(
    (todo) => todo.owner === currentUser.username
  );
  todoItem.forEach((todo) => {
    renderContent += `
      <li class="${todo.isDone ? 'checked' : ''}">${
      todo.task
    }<span class="close">×</span></li>
      `;
  });
  todoList.innerHTML = renderContent;
}
renderTodoList();

// Add Click Event to Add Button
btnAdd.addEventListener('click', () => {
  if (inputTask.value.trim().length === 0) {
    alert('Please enter a task');
    return;
  } else {
    const todo = new Task(inputTask.value, currentUser.username, false);
    todoArr.push(todo);
    localStorage.setItem('TODO_ARRAY', JSON.stringify(todoArr));
    renderTodoList();
    inputTask.value = '';
  }
});

// Add Event handlers to todoList element
todoList.addEventListener('click', (e) => {
  e.preventDefault();
  let element = e.target;
  console.log(element);
  // let name = element.tagName;
  // console.log(name);
  // Delete Function
  if (element.tagName === 'SPAN' && element.classList.contains('close')) {
    let todoTextValue = element.parentElement.textContent.slice(0, -1);
    // console.log(todoTextValue);
    // Delete Element
    element.parentElement.remove();
    let deleteIndex;
    todoArr.forEach((item, index) => {
      if (item.task === todoTextValue && item.owner === currentUser.username) {
        deleteIndex = index;
      }
    });
    // console.log(deleteIndex);
    todoArr.splice(deleteIndex, 1);
    console.table(todoArr);
    localStorage.setItem('TODO_ARRAY', JSON.stringify(todoArr));
    renderTodoList();
  }
  // Toggle Function
  if (element.tagName === 'LI') {
    let toggleFlag = element.classList.contains('checked');
    console.log(toggleFlag);
    let toggleTextValue = element.textContent.slice(0, -1);
    let toggleIndex;
    todoArr.forEach((item, index) => {
      if (
        item.task === toggleTextValue &&
        item.owner === currentUser.username
      ) {
        toggleIndex = index;
      }
    });
    if (toggleFlag) {
      element.classList.remove('checked');
      todoArr[toggleIndex].isDone = false;
    } else {
      element.classList.add('checked');
      todoArr[toggleIndex].isDone = true;
    }
    console.table(todoArr);
    localStorage.setItem('TODO_ARRAY', JSON.stringify(todoArr));
    renderTodoList();
  }
});
