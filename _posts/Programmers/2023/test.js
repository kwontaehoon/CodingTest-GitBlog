function solution(N, stages) {

    const test = [[1, 3], [2, 1], [3, 2]];

    test.sort((a,b) => b[1] - a[1]);
    
    console.log("test: ", test);
}

console.log(solution(6, [2,1,2,4,2,4,3,3]));