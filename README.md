# Destructuring
**Destructuring** borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object _on the left side of an assignment._ It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

Let’s take a look at both examples rewritten using destructuring.
## Destructuring values from an array
```
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
```
**Prints***: 10 25 -34

In this example, the brackets `[ ]` represent the array being destructured and `x`, `y`, and `z` represent the variables where you want to store the values from the array. Notice how you don’t have to specify the indexes for where to extract the values from because the indexes are implied.

**TIP**: You can also ignore values when destructuring arrays. For example, `const [x, , z] = point;` ignores the `y` coordinate and discards it.
## Destructuring values from an object
```
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);
```
**Prints**: quartz rose 21.29

In this example, the curly braces `{ }` represent the object being destructured and `type`, `color`, and `carat` represent the variables where you want to store the properties from the object. Notice how you don’t have to specify the property from where to extract the values. Because gemstone has a property named `type`, the value is automatically stored in the `type` variable. Similarly, `gemstone` has a `color` property, so the value of `color` automatically gets stored in the `color` variable. And it's the same with `carat`.

**TIP**: You can also specify the values you want to select when destructuring an object. For example, `let {color} = gemstone;` will only select the `color` property from the `gemstone` object.
