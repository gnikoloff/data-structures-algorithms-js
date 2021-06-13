/*
  STACK

  Time Complexity:

    Insertion: O(1)
    Deletion: O(1)
    Count: O(1)
*/

class Stack {
  storage = []
  capacity = 0
  
  constructor (capacity = Infinity) {
    this.capacity = capacity
  }

  push (val) {
    if (this.storage.length === this.capacity) {
      return 'Stack out of memory'
    }
    this.storage.push(val)
    return this.storage.length
  }
  
  pop () {
    if (this.storage.length === 0) {
      return 'No items currently in stack'
    }
    const value = this.storage.pop()
    return value
  }

  peek () {
    if (this.storage.length === 0) {
      return 'No items currently in stack'
    }
    return this.storage[this.storage.length - 1]
  }

  count () {
    return this.storage.length
  }
}

// const stack = new Stack()
// console.log('push A', stack.push('A'))
// console.log('push B', stack.push('B'))
// console.log('push C', stack.push('C'))
// console.log('push D', stack.push('D'))

// console.log('\n')
// console.log('peek', stack.peek())
// console.log('count', stack.count())
// console.log('\n')

// console.log('pop', stack.pop())
// console.log('pop', stack.pop())
// console.log('pop', stack.pop())
// console.log('pop', stack.pop())
// console.log('pop', stack.pop())

// console.log('\n')
// console.log('peek', stack.peek())
// console.log('count', stack.count())
// console.log('\n')

module.exports = Stack
