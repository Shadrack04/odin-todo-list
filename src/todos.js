import { Storage } from "./storage";


export let todoArray = Storage.retrieveStorage("todoArray") || [
  // {
  //   project: 'project',
  //   title: 'title',
  //   description: 'description'
  // },
  // {
  //   title: 'title 2',
  //   description: 'description 2'
  // },
  // {
  //   title: 'title 3',
  //   description: 'description 3'
  // }
];

export let projectArray = Storage.retrieveStorage('projectArray') || [
  {project: 'Home'},
  {project: 'House'},
  {project: 'Gym'}
]