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

// 2. Min/Max & Randomization (Beginner–Intermediate)
// Math.max(...args): Returns largest number; spread arrays with Math.max(...arr)
// Math.max()
// Returns the largest value from supplied arguments.

// Example 1: Direct argument comparison
console.log(Math.max(10, 20, 5, 30));
// Output: 30

// Example 2: Spreading an Array
const scores = [88, 92, 79, 95];
console.log(Math.max(...scores));
// Output: 95

// Example 3: Setting a minimum threshold (Clamping lower bound)
const userAge = 15;
const ageLimit = Math.max(userAge, 18);
console.log(ageLimit);
// Output: 18

const users = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 92 },
];

// Option 1: Map + Spread (Simplest for getting just the max number)
const maxScore = Math.max(...users.map((u) => u.score));
console.log(maxScore);
// Output: 95

// Option 2: Array.prototype.reduce() (Best when you need the full object)
const topUser = users.reduce((max, user) =>
  user.score > max.score ? user : max,
);
console.log(topUser);
// Output: { name: "Bob", score: 95 }

// Option 3: Math.max + Array.from()
const maxScoreAlt = Math.max(...Array.from(users, (u) => u.score));
console.log(maxScoreAlt);
// Output: 95

// Math.min(...args): Returns smallest number; useful for capping upper boundary limits
// Math.min()
// Returns the smallest value from supplied arguments.

// Example 1: Direct argument comparison
console.log(Math.min(10, 20, 5, 30));
// Output: 5

// Example 2: Spreading an Array
const prices = [19.99, 5.49, 12.0];
console.log(Math.min(...prices));
// Output: 5.49

// Example 3: Capping an upper bound (Max health capacity)
const currentHealth = 110;
const maxHealth = 100;
const cappedHealth = Math.min(currentHealth, maxHealth);
console.log(cappedHealth);
// Output: 100

const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Mouse", price: 19.99 },
  { name: "Keyboard", price: 49.99 },
];

// Option 1: Map + Spread (Get lowest value directly)
const cheapestPrice = Math.min(...products.map((p) => p.price));
console.log(cheapestPrice);
// Output: 19.99

// Option 2: Reduce (Get the full object with the lowest value)
const cheapestProduct = products.reduce((min, p) =>
  p.price < min.price ? p : min,
);
console.log(cheapestProduct);
// Output: { name: "Mouse", price: 19.99 }

// Math.random(): Generates pseudo-random float [0, 1); Use crypto.getRandomValues() for security!
// Math.random()
// Generates pseudo-random float between 0 (inclusive) and 1 (exclusive).

// Example 1: Raw random float
console.log(Math.random());
// Output: Random float (e.g., 0.428109...)

// Example 2: Integer within range [min, max] inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 6)); // Dice roll
// Output: Random integer between 1 and 6

// Example 3: Random array element selection
const colors = ["Red", "Green", "Blue"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);
// Output: "Red", "Green", or "Blue"

// Math.pow(base, exp): Raises base to exp power; equivalent to ES6 exponentiation operator (base ** exp)
// Math.pow()
// Raises base to the power of exponent (base^exponent).

// Example 1: Basic power calculation
console.log(Math.pow(2, 3));
// Output: 8

// Example 2: Fractional exponent (Square root equivalent)
console.log(Math.pow(16, 0.5));
// Output: 4

// Example 3: Compound interest formula
const principal = 1000;
const rate = 0.05;
const years = 2;
const total = principal * Math.pow(1 + rate, years);
console.log(total);
// Output: 1102.5
