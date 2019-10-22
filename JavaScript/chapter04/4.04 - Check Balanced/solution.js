const { a, Node } = require( '../helpers/Tree' )
function isHeightBalanced(node) {
    const heights = {}
    const stack = [node]
    while(stack.length) {
        const curr = stack.pop()
        if (!curr.left && !curr.right) {
            heights[curr.value] = 0
            continue
        } 
        if((curr.left && !heights.hasOwnProperty(curr.left.value)) 
        || (curr.right && !heights.hasOwnProperty(curr.right.value))) {
            stack.push(curr)
            if (curr.left) stack.push(curr.left)
            if (curr.right) stack.push(curr.right)
            continue
        }
        const leftHeight = curr.left ? heights[curr.left.value]: 0
        const rightHeight = curr.right ? heights[curr.right.value]: 0
        if (Math.abs(leftHeight - rightHeight) <= 1) {
            heights[curr.value] = Math.max(leftHeight, rightHeight) + 1
        } else {
            return false
        }
    }
    return true
}

function isHeightBalancedRecursive(node) {
    return checkBalance(node).balanced
}

function checkBalance(node) {
    if (!node) return {balanced: true, height: -1}
    const left = checkBalance(node.left)
    if (!left.balanced) return {balanced: false, height: 0}
    const right = checkBalance(node.right)
    if (!right.balanced) return {balanced: false, height: 0}

    const balanced = Math.abs(left.height - right.height) <= 1
    const height = Math.max(left.height, right.height) + 1
    return {balanced, height}
}

console.log(isHeightBalanced(a))
console.log(isHeightBalancedRecursive(a))

const notBalance = new Node('x', a, new Node('y', undefined, new Node('z')))
console.log(isHeightBalanced(notBalance))
console.log(isHeightBalancedRecursive(notBalance))