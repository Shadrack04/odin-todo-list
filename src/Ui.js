import { todoArray } from "./todos";
import { Storage } from "./storage";
import { selectedProject, setSelectedProject } from ".";

export class Ui {
  static updateUi(todoArray) {
    const todoList = document.querySelector(".todos");
    todoList.innerText = "";
    todoArray.forEach((item, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="todo-item" data-index="${index}">
          <p class="todo-title">
            ${item.title}
          </p>
          <div class="todo-utils">
            <button class="details">Details</button>
            <button class="delete">Del</button>
          </div>
        </div>
      `;
      todoList.appendChild(div);
    });
  }

  static updateProject(projectArray) {
    const projectList = document.querySelector(".project-list");
    projectList.innerHTML = "";
    projectArray.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.project;
      projectList.appendChild(li);

      // add event listener to the li
      li.addEventListener('click', (e) => {
        setSelectedProject(item.project);
        console.log(selectedProject);
      })
    });
  }

  static deleteTodo(indexToRemove, todoArray) {
    todoArray.splice(indexToRemove, 1);
    Storage.addToStorage("todoArray", todoArray);
    Ui.updateUi(todoArray);
  }
}
