/* 
# Challenge: Right Triangle Checker

Write a function called `isRightTriangle` that takes three numbers as arguments representing the lengths of the sides of a triangle. The function should return `true` if the triangle is a right triangle (satisfying the Pythagorean theorem), and `false` otherwise.

Instructions:

1. Define a function `isRightTriangle` that takes three parameters `side1`, `side2`, and `side3`, which represent the lengths of the sides of a triangle.
2. Use the Pythagorean theorem to check if the given sides satisfy the equation: `side1^2 + side2^2 = side3^2`, `side2^2 + side3^2 = side1^2`, or `side3^2 + side1^2 = side2^2`.
3. If any of the three conditions above is met, return `true`, indicating that the triangle is a right triangle. Otherwise, return `false`.

Example:

```js
console.log(isRightTriangle(3, 4, 5)); // Output: true (3^2 + 4^2 = 5^2)
console.log(isRightTriangle(5, 12, 13)); // Output: true (5^2 + 12^2 = 13^2)
console.log(isRightTriangle(6, 8, 10)); // Output: true (6^2 + 8^2 = 10^2)
console.log(isRightTriangle(7, 9, 12)); // Output: false
```



*/
