class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Queue {
  
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const newNode = new Node(value, null);
    if(!this.first){
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
  }

  dequeue(){
    if(!this.first){
      console.log('This queue is empty.');
      return null;
    }
    const value = this.first.value;
    this.first = this.first.next;
    return value;
  }

  isEmpty(){
    return !this.first;
  }

  peek(){
    return this.first ? this.first.value : null;
  }

  print(){
    let temp = this.first;
    while(temp){
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

module.exports = Queue;
