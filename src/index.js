import "./styles/style.css";
import { CreateTodo } from "./createTodo";
import { todoArray } from "./Todos";
import { Ui } from "./Ui";
import { alertMessage } from "./alert_message";

function selectorFn(selector) {
  return document.querySelector(selector);
}
// Selectors
const openModalBtn = document.querySelector('.create-btn');
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-btn');
const addTodoBtn = document.querySelector('.add-todo-btn');
const todoTitleInput = document.querySelector('#todo-title');
const todoDescriptionInput = document.querySelector('#todo-description');
const todoList = document.querySelector('.todos');
const selectedDate = selectorFn('#date');
const priority = selectorFn('select[name="priority"]');



// open modal
openModalBtn.addEventListener('click', ()=> {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// close todo
closeModalBtn.addEventListener('click', closeModal);


// close modal function
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


addTodoBtn.addEventListener('click', () => {
  const title = todoTitleInput.value;
  const description = todoDescriptionInput.value;
  const dueDate = selectedDate.value;
  const priorityLevel = priority.value;
  if(title === '' || description === '') {
    alertMessage('fill in all fields');
    return;
  }

  const todo = new CreateTodo(title, description, dueDate, priorityLevel);
  todoArray.push(todo);

  // Populate the DOM
  Ui.updateUi(todoArray);
  closeModal();
});

todoList.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')) {
    const todoItem = e.target.closest('.todo-item');
    const indexToRemove = todoItem.dataset.index;
    Ui.deleteTodo(indexToRemove, todoArray);
  }
})

window.addEventListener('DOMContentLoaded', ()=>{
  Ui.updateUi(todoArray);
});

