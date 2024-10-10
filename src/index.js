import "./styles/style.css";
import { CreateTodo } from "./createTodo";
import { todoArray } from "./Todos";
import { Ui } from "./Ui";
import { alertMessage } from "./alert_message";
import { DisplayDetails } from "./Details";
import { Project } from "./NewProject";

export function selectorFn(selector) {
  return document.querySelector(selector);
}
// Selectors
const openModalBtn = document.querySelector('.create-btn');
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-btn');

const todoList = document.querySelector('.todos');
const details = selectorFn('.details-modal');
const createTodoBtn = selectorFn('.create-todo-btn');
const createProject = selectorFn('.create-project-btn');

window.addEventListener('DOMContentLoaded', ()=>{
  Ui.updateUi(todoArray);
});

// open modal
openModalBtn.addEventListener('click', ()=> {
  openMainModal();
  CreateTodo.displayTodoInput();

  const addTodoBtn = document.querySelector('.add-todo-btn');
  addTodoBtn.addEventListener('click', ()=> {
    CreateTodo.addTodo(todoArray);
    closeModal();
  })
});

// close todo
closeModalBtn.addEventListener('click', closeModal);


todoList.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')) {
    Ui.deleteTodo(CreateTodo.getIndex(e), todoArray);
  } else if(e.target.classList.contains('details')) {
    DisplayDetails.updateUi(CreateTodo.getIndex(e), todoArray);
    overlay.classList.remove('hidden');
    overlay.addEventListener('click', ()=> {
      closeModal()
    })
  }
})


function openMainModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// close modal function
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  details.classList.add('hidden');
}
