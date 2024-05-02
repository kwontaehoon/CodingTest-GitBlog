function solution(k, tangerine) {

    const countMap = new Map();

    const arr = [1,1,1,1,1,1,2];

    const testMap = new Map();
    for( const size of arr){
        testMap.set(size, (testMap.get(size) || 0) + 1);
    }

    console.log("testMap: ", testMap);
    console.log("testMap2: ", Array.from(testMap.entries()).sort((a, b) => a[1] - b[1]));
    console.log("testMap3: ", Array.from(testMap.entries()).sort((a, b) => b[1] - a[1]));

    const tt = Array.from(testMap.values()).sort((a, b) => a - b);
    console.log("tt: ", tt);

    for (const size of tangerine) {
        console.log("size: ", size);
        countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    console.log("countMap: ", countMap);

    const sortedCounts = Array.from(countMap.values()).sort((a, b) => b - a);
    console.log("sortedCounts: ", sortedCounts);
    
    let kinds = 0;
    for (const count of sortedCounts) {
        k -= count;
        kinds += 1;
        if (k <= 0) {
            break;
        }
    }
    return kinds;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));