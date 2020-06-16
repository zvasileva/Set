export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(elem) {
    this.members.add(elem);
  }

  addAll(...elems) {
    for (const elem of elems) {
      this.add(elem);
    }
  }

  toArray() {
    return [...this.members];
  }
}
