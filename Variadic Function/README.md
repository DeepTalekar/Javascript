# Using the arguments object

In previous versions of JavaScript, this type of function would be handled using the arguments object. The **arguments object** is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

If we look at the implementation of our `sum()` function, then you’ll see how the arguments object could be used to handle the variable amount of numbers being passed to it.
it does have its issues:

 1. If you look at the definition for the sum() function, it doesn’t have any parameters.
    * This is misleading because we know the sum() function can handle an indefinite amount of arguments.
 2. It can be hard to understand
    - If you’ve never used the arguments object before, then you would most likely look at this code and wonder where the arguments object is even coming from. Did it appear out of thin air? It certainly looks that way.
