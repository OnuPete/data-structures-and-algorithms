// function powerSet(set) {
//     const setList = [];
//     const currSet = [];
//     createSet(currSet, set, setList);
//     return setList;
// }
// function createSet(currSet, set, setList) {
//     if(currSet.length > 0) setList.push([...currSet])
//     for (let i = 0; i < set.length; i++) {
//         currSet.push(set[i]);
//         set.splice(i, 1);
//         createSet(currSet, set, setList);
//         const el = currSet.pop();
//         set.splice(i, 0, el);
//     }
//     return;
// }

function powerSet(set) {
    return createSets(set, 0);
}

/* Just add the current element to all previous sets found.
 * the first set will be i = arr.length so allSubsets = [[]]
 * at i = arr.length - 1, allSubsets = [[], [6]] and so on.
 * For sets, order does not matter.
 */
function createSets(set, idx) {
    if (set.length === idx) return [[]];
    const allSubsets = createSets(set, idx + 1);
    let elem = set[idx];
    allSubsets.forEach(subset => {
        allSubsets.push([...subset, elem]);
    });
    return allSubsets;
}


// iterative solution
const powerSet2 = (s) => {
    const possibleSets = [[]]
    for (let i = 0; i < s.length; i++) {
        possibleSets.forEach(set => {
            possibleSets.push([...set, s[i]])
        })
    }
    return possibleSets
}

const set = [1, 2, 4, 6];
console.log(powerSet(set));
console.log(powerSet2(set))
