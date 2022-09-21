let factorial = 10;
let i = factorial;

// Trivial case
if (factorial === 0 || factorial === 1)
    console.log(1);

while (i > 1) {
    i--;
    factorial *= i;
}

console.log(factorial);