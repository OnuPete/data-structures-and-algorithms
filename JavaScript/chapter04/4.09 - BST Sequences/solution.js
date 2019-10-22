function riverSizes(matrix) {
    // Write your code here.
    const riverLengths = [];
    const seen = new Set();
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1 && !seen.has(`${r},${c}`)) {
                const riverLength = findRiverLength(matrix, r, c, seen);
                riverLengths.push(riverLength);
            }
        }
    }
    return riverLengths;
}

function findRiverLength(m, r, c, seen) {
    const stack = [[r, c]];
    let count = 0;
    while (stack.length) {
        const [row, col] = stack.pop();
        if (m[row][col] === 0 || seen.has(`${row},${col}`)) continue;
        if (m[row][col] === 1) {
            count += 1;
            seen.add(`${row},${col}`);
            if (row + 1 < m.length) {
                stack.push([row + 1, col]);
            }
            if (row - 1 >= 0) {
                stack.push([row - 1, col]);
            }
            if (col + 1 < m[row].length) {
                stack.push([row, col + 1]);
            }
            if (col - 1 < m[row].length) {
                stack.push([row, col - 1]);
            }
        }
    }
    return count;
}

const matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];

console.log(riverSizes(matrix));
