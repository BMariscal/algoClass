/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
 */


//cannot use an array
function Stack(capacity) {
  // implement me...
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.min = undefined;
  this.counter = 0;
}

//O(1)
Stack.prototype.push = function(value) {
  // implement me...
  if(this.count() >= this.capacity){
    console.log("Max capacity already reached. Remove element before adding a new one.");
  }else{
    if(value < this.min){
      this.min = value;
    }else if(this.count() === 0){
      this.min = value;
    }
    this.counter++;
    this.storage[this.count()] = value;
  }
};

//O(1)
Stack.prototype.pop = function() {
  // implement me...
  const lastElement = this.storage[this.count()-1];
  delete this.storage[this.count()-1];
  return lastElement;
};

//O(1)
Stack.prototype.peek = function() {
  // implement me...
  return this.storage[this.count()-1];
};

//O(1)
Stack.prototype.count = function() {
  // implement me...
  return this.counter;
};

Stack.prototype.contains = function(findme){
  return Object.values(this.storage).includes(findme);
};

//O(n)
Stack.prototype.until = function(num){
  let counter = 0;
  let idx = this.count()+1;
  Object.keys(this.storage).forEach(key=> {
    if (this.storage[key] === String(num)){
      idx = counter;
    }else{
      counter++;
    }
    });
  return this.count()- idx;
  };

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
*/
 //O(1)
 Stack.prototype.minElement = function(){
 return this.min;
 };

/*2. Sort a stack so that its elements are in ascending order.*/
 Stack.prototype.sort = function(){
 let newObj = {};
 let entries = Object.entries(this.storage);
 entries.sort((a,b)=> a[1]-b[1]);
 entries.forEach((item, idx)=> newObj[idx] = item[1]);
 return newObj;
 };

 let myStack = new Stack();
 myStack.push(7);
 myStack.push(5);
 myStack.push(6);
 myStack.push(2);
 myStack.push(10);
 console.log(myStack.count());
 console.log(myStack.minElement());
 console.log(myStack.sort());
/*
3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false*/

function balancedParens(str){
  const matchLeftParens = str.match(/\(/g).length;
  const matchRightParens = str.match(/\)/g).length;
  return matchLeftParens === matchRightParens;
}
console.log(balancedParens( 'sqrt(5*(3+8)/(4-2))' ) === true)
console.log(balancedParens( 'Math.min(5,(6-3))(' ) === false)

/*

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */






