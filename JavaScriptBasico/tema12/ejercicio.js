function FunFibo(num) {
    let result = [0, 1];
    if (num === 0)  result.pop();
    for (let i = 2; i < num; i++) {
        result = [...result, (result[i - 1] + result[i - 2])]
    }
    return result;
}

console.log(FunFibo(6));