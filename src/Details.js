import {selectorFn} from "./index";

export class DisplayDetails {
  static updateUi(index, todoArray) {
    const todoObject = todoArray[index];
    const details = selectorFn('.details-modal');
    details.innerHtml = "";
    details.innerHTML = `
      <h1>${todoObject.title}</h1>
      <div class="todo-info">
        <h3 class="detail-project">Project: <span></span></h3>
        <h3 class="detail-priority">Priority: <span>${todoObject.priority}</span></h3>
        <h3 class="detail-due-date">Due Date: <span>${todoObject.dueDate}</span></h3>
        <h3 class="detail-description">Details: <span>${todoObject.description}</span></h3>
      </div>
    `;
    details.classList.remove('hidden');
  }
}