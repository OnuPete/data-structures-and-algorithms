function sumSteps(n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    return sumSteps(n - 1) + sumSteps(n - 2) + sumSteps(n - 3);
}

function sumSteps2(n) {
    const memo = [];
    for (let i = 0; i <= n; i++) {
        memo.push(-1);
    }
    return sumStepsWithMemo(n, memo);
}

function sumStepsWithMemo(n, memo) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    if (memo[n] > -1) {
        return memo[n];
    }
    memo[n] = sumStepsWithMemo(n-1, memo) + sumStepsWithMemo(n - 2, memo) + sumStepsWithMemo(n - 3, memo);
    return memo[n]; 
}

console.time('sumSteps');
console.log(sumSteps(33));
console.timeEnd('sumSteps');

console.time('sumSteps2');
console.log(sumSteps2(33));
console.timeEnd('sumSteps2');
