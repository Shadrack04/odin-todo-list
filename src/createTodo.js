import { Ui } from "./ui";
import { Storage } from "./storage";
import { selectedProject, setSelectedProject } from ".";
import { alertMessage } from "./alert_message";

// create new instance, create method to push new instance to an array,
export class CreateTodo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  static displayTodoInput() {
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = "";

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="todo-input-container">
            <input type="text" id="todo-title" placeholder="Todo Title" />
            <input type="text" id="todo-description" placeholder="Todo Description" /><br>
            <label for="date">Due Date:</label><br>
            <input type="date" name="date" id="date">
          </div>
          <div class="select-container">
            <label for="priority-level">Priority Level:</label>
            <select name="priority" id="priority-level">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button class="add-todo-btn">Add Todo</button>
    `;
    modalContent.appendChild(div);
  }

  static getIndex(e) {
    const todoItem = e.target.closest(".todo-item");
    const index = todoItem.dataset.index;
    return index;
  }

  static addTodo(todoArray) {
    const title = document.querySelector("#todo-title").value;
    const description = document.querySelector("#todo-description").value;
    const dueDate = document.querySelector("#date").value;
    const priority = document.querySelector('select[name="priority"]').value;

    if(CreateTodo.isInputInvalid(title, description, dueDate)) {
      alertMessage('Inputs can not be empty');
      return;
    }

    const todo = new CreateTodo(
      title,
      description,
      dueDate,
      priority,
      selectedProject
    );
    todoArray.push(todo);

    Storage.addToStorage("todoArray", todoArray);
    Ui.setTodoItemToDisplay(todoArray, selectedProject);
  }
  
  static isInputInvalid(title, des, date) {
    if(title === '' || des === '' || date === '') {
      return true;
    }else {
      return false;
    }
  }

  static isDateValid(dueDate) {
    
  }
}
