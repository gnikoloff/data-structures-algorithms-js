const Stack = require('./stack')

/*
  QUEUE
  
  Time Complexity:
    Enqueue: O(1)
    Dequeue: O(1)
    Count: O(1)
*/

class Queue {
  inStack = new Stack()
  outStack = new Stack()
  
  enqueue (item) {
    this.inStack.push(item)
  }

  dequeue () {
    if (this.count() === 0) {
      return 'No items in queue'
    }
    if (this.outStack.count() === 0) {
      let i = this.inStack.count()
      while (i--) {
        this.outStack.push(this.inStack.pop())
      }
    }
    return this.outStack.pop()
  }

  count () {
    return this.inStack.count() + this.outStack.count()
  }

}

// const queue = new Queue()

// console.log('enqueue A', queue.enqueue('A'))
// console.log('enqueue B', queue.enqueue('B'))
// console.log('enqueue C', queue.enqueue('C'))
// console.log('enqueue D', queue.enqueue('D'))
// console.log('enqueue E', queue.enqueue('E'))
// console.log('\n')
// console.log('count', queue.count())
// console.log('\n')
// console.log('dequeue', queue.dequeue())
// console.log('dequeue', queue.dequeue())
// console.log('dequeue', queue.dequeue())
// console.log('dequeue', queue.dequeue())
// console.log('dequeue', queue.dequeue())
// console.log('dequeue', queue.dequeue())

module.exports = Queue
