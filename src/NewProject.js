import { alertMessage } from "./alert_message";


export class Project {
  constructor(project) {
    this.project = project;
  }

  static displayInput() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '';
    modalContent.innerHTML = `
      <div class="project-input-container">
        <input type="text" id="project-input" placeholder="Create New Project" />
      </div>
      <button class="create-new-project">Create Project</button>
    `;
  }

  static updateProjectList() {
   
  }
}