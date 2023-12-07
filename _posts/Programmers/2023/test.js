function solution(arr1, arr2) {
    let sum = 0;
    const tt = arr1.join(",").split(",").map((x,index)=>Number(x)+Number(arr2.join(",").split(",")[index]));
    console.log(tt);


}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));