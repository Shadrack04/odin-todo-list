
export class todos {
  constructor(title, description) {
    this.title = title,
    this.description = description
  }

  addTodo(todoArray) {
    todoArray.push({
      title: this.title,
      description: this.description
    })
  }

}