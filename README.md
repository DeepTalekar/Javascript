# For…of loop

The **for…of loop** is used to loop over any type of data that is iterable.

You write a for…of loop almost exactly like you would write a for…in loop, except you swap out `in` with `of` and you can drop the index. t’s good practice to use plural names for objects that are collections of values. That way, when you loop over the collection, you can use the singular version of the name when referencing individual values in the collection. For example, `for (const button of buttons) {...}`.

But wait, there’s more! The for…of loop also has some additional benefits that fix the weaknesses of the for and for…in loops.

You can stop or break a for…of loop at anytime. And you don’t have to worry about adding new properties to objects. The for…of loop will only loop over the values in the object.
