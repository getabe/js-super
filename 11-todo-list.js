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

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
      " class = "delete-todo-button">Delete</button>`;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
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
