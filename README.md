# Rest Parameter
If you can use the spread operator to spread an array into multiple elements, then certainly there should be a way to bundle multiple elements back into an array, using the **Rest Parameter.**
The **rest parameter**, also written with three consecutive dots (`...`), allows you to represent an indefinite number of elements as an array. This can be helpful in a couple of different situations.

One situation is when assigning the values of an array to variables. For example,
```
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```
**Prints**: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

This code takes the values of the `order` array and assigns them to individual variables using destructuring (as you saw in the Destructuring section earlier in this lesson). `total`, `subtotal`, and `tax` are assigned the first three values in the array, however, items is where you want to pay the most attention.

By using the rest parameter, `items` is assigned the rest of the values in the array (as an array).

## Variadic functions

Another use case for the rest parameter is when you’re working with variadic functions. **Variadic functions** are functions that take an indefinite number of arguments.

For example, let’s say we have a function called `sum()` which calculates the sum of an indefinite amount of numbers. How might the `sum()` function be called during execution?
```
sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);
```
There’s literally an endless number of ways the `sum()` function could be called. Regardless of the amount of numbers passed to the function, it should always return the total sum of the numbers.
