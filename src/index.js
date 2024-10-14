import "./styles/style.css";
import { CreateTodo } from "./createTodo";
import { todoArray, projectArray } from "./todos";
import { Ui } from "./ui";
import { DisplayDetails } from "./Details";
import { Project } from "./newProject";

export function selectorFn(selector) {
  return document.querySelector(selector);
}

export let selectedProject = "Home";
export function setSelectedProject(value) {
  selectedProject = value;
}
// Selectors
const openModalBtn = document.querySelector(".create-btn");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-btn");
const todoList = document.querySelector(".todos");
const details = selectorFn(".details-modal");

window.addEventListener("DOMContentLoaded", () => {
  Ui.updateUi(todoArray);
  Ui.updateProject(projectArray);
});


// open modal
openModalBtn.addEventListener("click", () => {
  openMainModal();
  CreateTodo.displayTodoInput();

  const addTodoBtn = document.querySelector(".add-todo-btn");
  addTodoBtn.addEventListener("click", () => {
    CreateTodo.addTodo(todoArray);
    closeModal();
  });
});

// close todo
closeModalBtn.addEventListener("click", closeModal);

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    Ui.deleteTodo(CreateTodo.getIndex(e), todoArray);
  } else if (e.target.classList.contains("details")) {
    DisplayDetails.updateUi(CreateTodo.getIndex(e), todoArray);
    overlay.classList.remove("hidden");
    overlay.addEventListener("click", () => {
      closeModal();
    });
  }
});

const modalAside = document.querySelector(".modal-aside");
modalAside.addEventListener("click", (e) => {
  if (e.target.classList.contains("create-todo-btn")) {
    CreateTodo.displayTodoInput();
  } else if (e.target.classList.contains("create-project-btn")) {
    Project.displayInput();
    e.target.style.textDecoration = "underline #3b82f6 4px";
    e.target.style.textUnderlineOffset = "8px";
    Project.updateProjectList(projectArray);
  }
});

function openMainModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// close modal function
export function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  details.classList.add("hidden");
}
