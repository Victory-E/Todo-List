//GETTING SELECTORS
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('.form');

let todos = [];

// events

form.addEventListener('submit', function (event) {
  //1. prevent form from reloading
  event.preventDefault();

  //2. get our input value
  const todo = todoInput.value;

  //3. add todo to array
  todos.push(todo);

  //4. clears input field
  todoInput.value = '';

  //5. display on DOM
  renderTodos(todos);
});

//a function that renders todos
const renderTodos = (arr) => {
  todoList.innerHTML = ''; // Clear existing todo items

  for (let i = 0; i < arr.length; i++) {
    const todoItem = arr[i];

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerText = todoItem;
    todoDiv.appendChild(li);

    const checkButton = document.createElement('button');
checkButton.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
checkButton.classList.add('check');
checkButton.addEventListener('click', function () {
  toggleTodoCompleted(todoDiv);
});
todoDiv.appendChild(checkButton);

const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash-can"></i>';
deleteButton.classList.add('trash');
deleteButton.addEventListener('click', function () {
  deleteTodoItem(todoDiv);
});
todoDiv.appendChild(deleteButton);


    todoList.appendChild(todoDiv);
  }
};

// function to toggle todo item completed status
const toggleTodoCompleted = (todoDiv) => {
  const todoItem = todoDiv.querySelector('.todo-item');
  todoItem.classList.toggle('completed');
};


// function to delete todo item
const deleteTodoItem = (todoDiv) => {
  const todoItem = todoDiv.querySelector('.todo-item').textContent;
  const index = todos.indexOf(todoItem);
  if (index > -1) {
    todos.splice(index, 1);
  }
  todoDiv.remove();
};

// know which todo you are clicking
todoList.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.classList.contains('fa-sharp') ||
    target.classList.contains('fa-solid') ||
    target.classList.contains('fa-trash-can')
  ) {
    console.log('delete');
    deleteTodoItem(target.parentElement);
  }

  if (
    target.classList.contains('fa-solid') ||
    target.classList.contains('fa-check-to-slot')
  ) {
    console.log('checked');
    toggleTodoCompleted(target.parentElement);
  }

  console.log(target);
});



