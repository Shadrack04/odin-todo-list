export class Ui {
  static updateUi(element, todoArray) {
    todoArray.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="todo-item">
          <p class="todo-title">
            ${item.title}
          </p>
          <div class="todo-utils">
            <button class="details">Details</button>
            <button class="delete">Del</button>
          </div>
        </div>
      `;
      element.appendChild(div);
    });
  }
}
