const Stack = require('./stack')

/*
  MIN STACK

  Time Complexity:

    Insertion: O(1)
    Deletion: O(1)
    Get minimum value: O(1)
*/

class MinStack extends Stack {
  minStack = new Stack()
  push (val) {
    if (this.storage.length === this.capacity) {
      return 'Stack out of memory'
    }
    if (this.minStack.count() === 0) {
      this.minStack.push(val)
    } else {
      if (this.minStack.peek() > val) {
        this.minStack.push(val)
      } else {
        this.minStack.push(this.minStack.peek())
      }
    }
    this.storage.push(val)
    return this.storage.length
  }
  pop () {
    if (this.storage.length === 0) {
      return 'No items currently in stack'
    }
    const value = this.storage.pop()
    this.minStack.pop()
    return value
  }
  getMin () {
    return this.minStack.peek()
  }
}

const minStack = new MinStack()
console.log('push 9', minStack.push(9))
console.log('push 4', minStack.push(4))
console.log('push 7', minStack.push(7))
console.log('push 5', minStack.push(5))
console.log('push 1', minStack.push(1))
console.log('push 100', minStack.push(100))
console.log('push 0.1', minStack.push(0.1))

console.log('current min', minStack.getMin())

module.exports = MinStack
