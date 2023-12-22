class Stack {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }
  remove() {
    this.data.pop();
  }
}

const stack = new Stack();
for (let i = 1; i <= 10; i++) {
  stack.add(i);
}

console.log(stack);

stack.remove();
stack.remove();
stack.remove();

console.log(stack);
