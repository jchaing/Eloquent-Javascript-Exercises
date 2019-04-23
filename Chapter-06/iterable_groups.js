/*

Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That would
work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during
iteration.

// Your code here (and the code from the previous exercise)

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

*/

class Group {
  constructor() {
    this.array = [];
  }
  has(elem) {
    return this.array.includes(elem);
  }
  add(elem) {
    this.has(elem) ? null : this.array.push(elem);
  }
  delete(elem) {
    this.array = this.array.filter(x => x !== elem);
  }
  static from(iterObj) {
    let group = new Group();
    for (let elem of iterObj) {
      group.add(elem);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }
  next() {
    if (this.position >= this.group.array.length) {
      return { done: true };
    } else {
      let result = { value: this.group.array[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
