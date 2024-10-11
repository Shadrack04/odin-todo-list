import { alertMessage } from "./alert_message";
import { closeModal } from ".";
import { Ui } from "./Ui";


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

  static updateProjectList(projectArray) {
   const projectInput = document.querySelector('#project-input');
   const createNewProjectBtn = document.querySelector('.create-new-project');

   createNewProjectBtn.addEventListener('click', (e) => {
    const newProject = new Project(projectInput.value);
    projectArray.push(newProject);
    Ui.updateProject(projectArray);
    closeModal();
   })
  }
}