// 1. Fundamental Rounding & Absolute Value (Beginner)
// Math.abs()
// Returns the absolute (non-negative) value of a number.
// Math.abs(x): Converts negative numbers to positive; returns absolute distance from 0

// Example 1: Basic negative number conversion
const result1 = Math.abs(-10);
console.log(result1);
// Output: 10

// Example 2: Distance between two points
const pos1 = 15;
const pos2 = 42;
const distance = Math.abs(pos1 - pos2);
console.log(distance);
// Output: 27

// Example 3: Handled edge cases (coercion)
console.log(Math.abs("-5"));
// Output: 5

// Math.floor()
// Math.floor(x): Rounds down to the nearest integer (moves left on the number line)
// Math.floor()
// Rounds a number DOWN to the nearest integer.

// Example 1: Basic positive float
const result2 = Math.floor(4.9);
console.log(result2);
// Output: 4

// Example 2: Negative numbers (rounds down away from zero)
const result3 = Math.floor(-4.1);
console.log(result3);
// Output: -5

// Example 3: Converting total items to full pages
const items = 25;
const perPage = 10;
const fullPages = Math.floor(items / perPage);
console.log(fullPages);
// Output: 2

// Math.ceil(x): Rounds up to the nearest integer (moves right on the number line)
// Math.ceil()
// Rounds a number UP to the nearest integer.

// Example 1: Basic positive float
const result4 = Math.ceil(4.1);
console.log(result4);
// Output: 5

// Example 2: Negative numbers (rounds up toward zero)
const result5 = Math.ceil(-4.9);
console.log(result5);
// Output: -4

// Example 3: Total pages calculation
const totalItems = 21;
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage);
console.log(totalPages);
// Output: 3

// Math.round(x): Standard arithmetic rounding to nearest integer (.5 rounds toward +Infinity)
// Math.round()
// Rounds a number to the nearest integer (.5 rounds UP).

// Example 1: Rounding down vs up
console.log(Math.round(4.4));
// Output: 4
console.log(Math.round(4.5));
// Output: 5

// Example 2: Negative numbers with .5 ties
console.log(Math.round(-4.5));
// Output: -4

// Example 3: Rounding score display
const score = 87.6;
console.log(`Score: ${Math.round(score)}`);
// Output: "Score: 88"

// Math.trunc(x): Drops decimal part without rounding (differs from floor for negative numbers)
// Math.trunc()
// Removes all fractional digits, leaving only the integer part.

// Example 1: Truncating positive floats
console.log(Math.trunc(4.9));
// Output: 4

// Example 2: Truncating negative floats
console.log(Math.trunc(-4.9));
// Output: -4

// Example 3: Converting string numbers safely
console.log(Math.trunc("12.345"));
// Output: 12
