function magicIndex(arr) {
    let high = arr.length - 1
    let low = 0
    let mid = Math.floor((high - low)/2)
    while(!(low > high)) {
        if (arr[mid] === mid) {
            return mid
        } else if (mid > arr[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
        mid = Math.floor((high - low)/2) + low
    }
    return -1
}

const arr = [-20, -5, -3, 2, 4, 8, 9, 14, 20, 25, 28, 30, 46]
console.log(magicIndex(arr))