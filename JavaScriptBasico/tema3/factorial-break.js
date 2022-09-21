let factorial = 10;
let i = factorial;

while (i > 1) {
    // Trivial case
    if (factorial === 0 || factorial === 1) {
        break;
    }
    i--;
    factorial *= i;
}

console.log(factorial);