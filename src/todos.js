import { Storage } from "./storage";


export let todoArray = Storage.retrieveStorage("todoArray") || [];

export let projectArray = Storage.retrieveStorage('projectArray') || [
  {project: 'Home'},
  {project: 'House'},
  {project: 'Gym'}
]