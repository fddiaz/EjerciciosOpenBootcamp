let factorial = 10;

// Trivial case
if (factorial === 0 || factorial === 1)
    console.log(1);

for (let i = factorial - 1; i >= 1; i--) {
    factorial *= i;
}

console.log(factorial);