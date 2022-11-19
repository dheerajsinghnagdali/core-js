// Number

Number("123"); // 123

// a string with some words
Number("Max123"); // NaN

Number(undefined); // NaN

Number.MAX_SAFE_INTEGER; // The maximum safe integer in JavaScript.

Number.MIN_SAFE_INTEGER; // The minimum safe integer in Javascript.

Number.MAX_VALUE; // The largest positive representable number.

Number.MIN_VALUE; // The minimum positive representable number - that is, the positive number closest to zero (without actually being zero).

Number.NaN; // Special "Not a Number" value.

Number.NEGATIVE_INFINITY; // -Infinity

Number.POSITIVE_INFINITY; // Infinity

// Methods
Number.isNaN(NaN); // true
Number.isNaN("Max123"); // false

Number.isFinite(123); // true
Number.isFinite(Number.POSITIVE_INFINITY); // false
Number.isFinite(Number.NEGATIVE_INFINITY); // false

Number.isInteger(123.23); // false
Number.isInteger(123); // true

Number.isSafeInteger(Number.MIN_SAFE_INTEGER); // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
Number.isSafeInteger(Number.MIN_SAFE_INTEGER * 2); // false

Number.parseFloat(123); // 123
Number.parseFloat(123.23); // 123.23
Number.parseFloat("123.23"); // 123.23

Number.parseInt(123.23); // 123

const number = Number(10.5555);
number.toFixed(2); // 11.55
number.toString(); // "10.5555"
number.toExponential(); // 1.05555e+1
