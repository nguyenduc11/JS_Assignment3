'use strict';
// Create class User
class User {
  constructor(
    firstname,
    lastname,
    username,
    password,
    pageSize = 10,
    category = 'general'
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    // ===
    this.pageSize = pageSize;
    this.category = category;
  }
  // Setter Functions
  set setPageSize(pageSize) {
    this.pageSize = pageSize;
  }
  set setCategory(category) {
    this.category = category;
  }
}

// Create Task Class
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
