

export class Storage {
  static addToStorage(name, arr) {
    arr.sort((a, b) => new Date(a.dueDate)- new Date(b.dueDate))
    localStorage.setItem(name, JSON.stringify(arr));
  }

  static retrieveStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}