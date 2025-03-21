const todoList = [
  {name:'make dinner',
    dueDate: '2025-03-20'
  },{
    name: 'wash dishes',
    dueDate: '2025-03-20'
  }];
renderTodoList();
deleteTodo();
/*
function deleteTodo(){
  const deleteActivity = document.querySelector('.js-name-input');
  const activity  = deleteActivity.value;

  todoList.remove(activity);
}
*/
function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class = "delete-todo-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
  addTodo();
});

document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const inputDueDate = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = inputDueDate.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  //reset the text box
  inputElement.value = '';
  renderTodoList();
}
