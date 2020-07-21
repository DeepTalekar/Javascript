# Spread Operator
The **spread operator**, written with three consecutive dots ( `...` ), is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

Let’s take a look at a few examples to see how it works.
```
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```
**Prints**: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
```
**Prints**: 2 3 5 7 11 13 17 19 23 29

If you look at the output from the examples, notice that both the array and set have been expanded into their individual elements.

So Lets Take a Look **_how we can use it to concat two array's_**
