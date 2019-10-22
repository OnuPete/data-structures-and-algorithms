/* eslint-disable no-shadow */
const nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const edges = { 
    a: [{ node: 'e', weight: 1 }, { node: 'g', weight: 2 }],
    b: [{ node: 'a', weight: 3 }, { node: 'c', weight: 3 }],
    c: [{ node: 'h', weight: 1 }],
    d: [{ node: 'b', weight: 1 }, { node: 'f', weight: 2 }],
    e: [{ node: 'b', weight: 1 }, { node: 'f', weight: 2 }],
    f: [{ node: 'b', weight: 1 }, { node: 'd', weight: 1 }, { node: 'i', weight: 3 }],
    g: [{ node: 'b', weight: 1 }],
    h: [{ node: 'd', weight: 2 }, { node: 'i', weight: 2 }],
    i: [{ node: 'e', weight: 3 }, { node: 'c', weight: 3 }],
};

function findShortestPath(start, finish, nodes, edges) {
    const pathWeights = nodes.reduce((weights, node) => {
        if (node === start) {
            weights[start] = 0
        }
        else {
            weights[node] = Math.min()
        }
        return weights;
    }, {});
    
    const previous = {};
    let remaining = new PriorityQueue(nodes, pathWeights);
    while(!remaining.isEmpty()) {
        const node = remaining.pop();
        edges[node].forEach(nextNode => {
            let edgeWeigth = getEdgeWeight(edges, node, nextNode.node) + pathWeights[node];
            if (pathWeights[nextNode.node] > edgeWeigth) {
                pathWeights[nextNode.node] = edgeWeigth;
                previous[nextNode.node] = node;
                remaining = new PriorityQueue(remaining.queue, pathWeights);
            }
        });
    }
    let pointer = finish;
    const path = [{node: pointer, weight: pathWeights[pointer]}];
    while(pointer !== start) {
        pointer = previous[pointer];
        path.push({node: pointer, weight: pathWeights[pointer]});
    }
    path.reverse();
    return path;
}

function getEdgeWeight(edges, firstNode, secondNode) {
    for(let i = 0; i < edges[firstNode].length; i++) {
        if (edges[firstNode][i].node === secondNode) {
            return edges[firstNode][i].weight;
        }
    }
}

class PriorityQueue {
    constructor(nodes, weights) {
        this.queue = [];
        this.weights = weights;
        for(let i = 0; i < nodes.length; i++) {
            this.queue.push(nodes[i]);
            this.bubbleUp();
        }
    }
    bubbleUp() {
        let idx = this.queue.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.weights[this.queue[idx]] < this.weights[this.queue[parentIdx]]){
                let temp = this.queue[parentIdx];
                this.queue[parentIdx] = this.queue[idx];
                this.queue[idx] = temp;
            }
            idx = parentIdx;
        }

    }
    pop() {
        const min = this.queue[0];
        this.queue[0] = this.queue[this.queue.length - 1];
        this.queue.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(idx) {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let maxIdx = idx;

        if (idx < this.queue.length && this.weights[this.queue[leftIdx]] > this.weights[this.queue[maxIdx]]) {
            maxIdx = leftIdx;
        }
        if (idx < this.queue.length && this.weights[this.queue[rightIdx]] > this.weights[this.queue[maxIdx]]) {
            maxIdx = rightIdx;
        }

        if (maxIdx !== idx) {
            const temp = this.queue[idx];
            this.queue[idx] = this.queue[maxIdx];
            this.queue[maxIdx] = temp;
            this.bubbleDown(idx);
        }
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

console.log(findShortestPath('i', 'd', nodes, edges));