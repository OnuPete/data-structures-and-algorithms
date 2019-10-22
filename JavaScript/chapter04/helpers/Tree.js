class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const e = new Node('e')
const f = new Node('f')
const d = new Node('d', e, f)
const g = new Node('g')
const c = new Node('c', d, g)
const i = new Node('i')
const j = new Node('j')
const h = new Node('h', i, j)
const b = new Node('b', c, h)
const m = new Node('m')
const n = new Node('n')
const l = new Node('l', m, n)
const o = new Node('o')
const k = new Node('k', l, o)
const a = new Node('a', b, k)

module.exports = {
    a, Node
}