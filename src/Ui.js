import { todoArray } from "./Todos";


export class Ui {
  static updateUi(todoArray) {
    const todoList = document.querySelector('.todos');
    todoList.innerText = '';
    todoArray.forEach((item, index) => {
      const div = document.createElement('div');
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

  static deleteTodo(indexToRemove, todoArray) {
    todoArray.splice(indexToRemove, 1);
    console.log(todoArray);
    Ui.updateUi(todoArray);
  }
}
