/* This find path starts at the bottom right and tries to find if (r - 1, c)
 * to (0, 0) or if (r, c - 1) has a path to (0, 0). This means if (r - 2, c),
 * (r - 1, c - 1) for (r - 1, c) is a path to (0, 0) or if (r - 1, c - 1), 
 * (r, c - 2) for (r, c - 1) is a path to (0, 0). This takes takes
 * O(2^(r*c)) runtime as every row column combo has two paths to take.
 */
function findPath(grid) {
    console.log('grid: \n', grid)
    const path = []
    const r = grid.length - 1
    const c = grid[r].length - 1
    
    createPath(grid, path, r, c)
    return path
}

function createPath(grid, path, r, c) {
    if (r < 0 || c < 0 || !grid[r][c]) {
        return false
    }
    const isOrigin = r === 0 && c === 0
    if (isOrigin || createPath(grid, path, r, c - 1) || createPath(grid, path, r - 1, c)) {
        path.push([r, c])
        return true
    } 
    return false
}

/*  We instead memorize if we have visited a failed point so as to not try and
 *  recalculate a failed points paths. This significantly reduces our runtime
 *  down to O(r * c) as we only have to calculate each square's path to 
 *  (0, 0) once
 */

function findPath2(grid) {
    console.log('grid: \n', grid)
    const path = []
    const r = grid.length - 1
    const c = grid[r].length - 1
    const memo = new Set()
    createPath2(grid, path, r, c, memo)
    return path
}

function createPath2(grid, path, r, c, memo) {
    if (r < 0 || c < 0 || !grid[r][c]) {
        return false
    }
    if (memo.has(`${r},${c}`)) {
        return false
    }
    const isOrigin = r === 0 && c === 0
    if (isOrigin || createPath2(grid, path, r, c - 1, memo) || createPath2(grid, path, r - 1, c, memo)) {
        path.push([r, c])
        return true
    } 
    memo.add(`${r},${c}`)
    return false
}

const grid = [
    [1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1]
]

console.log(findPath2(grid))