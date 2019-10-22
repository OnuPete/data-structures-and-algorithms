function commonAncestor(node, a, b, graph) {
    if (node == null) return null;
    console.log(node);
    if (node === a || node === b) return node;
    const currNode = graph[node];
    // is a or b in left subtree or in right subtree, if so, return this currNode
    const left = commonAncestor(currNode.left, a, b, graph)
    const right = commonAncestor(currNode.right, a, b, graph) 
    if (left !== null && right !== null) {
        return node
    } else if (left !== null ) {
        return left
    }else{
        return right
    }
    return false;
}

const graph = {
    start: 'a',
    a: {
        left: 'b',
        right: 'c'
    },
    b: {
        left: 'd',
        right: 'f'
    },
    c: {
        left: null,
        right: null
    },
    d: {
        left: 'h',
        right: 'e'
    },
    e: {
        left: null,
        right: null
    },
    f: {
        left: 'g',
        right: null
    },
    g: {
        left: null,
        right: null
    },
    h: {
        left: null,
        right: 'i'
    },
    i: {
        left: null,
        right: null
    }
};

console.log(commonAncestor(graph.start, 'i', 'g', graph));
