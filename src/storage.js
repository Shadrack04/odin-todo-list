

export class Storage {
  static addToStorage(name, arr) {
    localStorage.setItem(name, JSON.stringify(arr));
  }

  static retrieveStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}