function multiply(a, b) {
    if (a === 0 || b === 0) return 0
    const sum = 0
    let mutiplied = multiplyHelper(a, b, sum)
    return mutiplied
}

function multiplyHelper(a, b, sum) {
    if (b === 0) return sum
    sum += a
    return multiplyHelper(a, b - 1, sum)
}

function multiply2(a, b) {
    const bigger = a < b ? b : a
    const smaller = a < b ? a : b
    return multiplyHelper2(smaller, bigger) 
}

function multiplyHelper2(smaller, bigger) {
    if (smaller === 0) return 0
    if (smaller === 1) return bigger

    const half = smaller >> 1
    const halfProd = multiplyHelper2(half, bigger)

    if (smaller % 2 === 0) {
        return halfProd + halfProd
    } else {
        return halfProd + halfProd + bigger
    }
}

console.log(multiply(3, 5))