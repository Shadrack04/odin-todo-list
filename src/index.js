import "./styles/style.css";
import { CreateTodo } from "./createTodo";
import { Todos } from "./todos";
import { Ui } from "./Ui";


const todoList = document.querySelector('.todos');
todoList.innerText = '';
let todoArray = [
  {
    title: 'title',
    description: 'description'
  },
  {
    title: 'title 2',
    description: 'description 2'
  },
  {
    title: 'title 3',
    description: 'description 3'
  }
];

Ui.updateUi(todoList, todoArray);



