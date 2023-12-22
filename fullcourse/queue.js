class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    this.data.pop();
  }
}

queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
console.log("Adding queue data in Array!");
console.log(queue);
queue.remove();
queue.remove();
queue.remove();
queue.remove();

console.log("Removing queue data in Array!");
console.log(queue);
