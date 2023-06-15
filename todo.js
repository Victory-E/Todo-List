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
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv');

  // create todo item ui and append to todoDiv
  const li = document.createElement('li');
  li.classList.add('todo-item');
  todoDiv.appendChild(li);

  //create checkbutton
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa fa-check"></i>';
  checkButton.classList.add('check');
  todoDiv.appendChild(checkButton);

  //create deletebutton
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.classList.add('trash');
  todoDiv.appendChild(deleteButton);

  //loop through todos-array
  for (i = 0; i < arr.length; i++) {
    const todoItem = arr[i];
    //added todo item into ui
    li.innerHTML = todoItem;

    todoList.appendChild(todoDiv);
  }
};

// know which todo you are clicking
todoList.addEventListener('click', function (event) {
  const target = event.target;

  // if the target of our event has a class equal to trash
  if (target.classList[0] === 'trash') {
    console.log('delete');



    // write your delete here
     // if the target of our event has a class equal to trash
  if (target.classList[0] === 'trash') {
    console.log('delete');

    // Get the parent element (todoDiv) of the trash button
    const todoDiv = target.parentElement;

    // Remove the todoDiv from the DOM
    todoDiv.remove();

    // Remove the corresponding todo from the todos array
    const todoItem = todoDiv.querySelector('.todo-item').innerText;
    const index = todos.indexOf(todoItem);
    if (index > -1) {
      todos.splice(index, 1);
    }
  }}





  if (target.classList[0] === 'check') {
    console.log('checkeeed');
  }

  console.log(target);
}); 