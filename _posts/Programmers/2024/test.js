function solution(k, tangerine) {

    const arr = Array.from({length: tangerine.length}, () => 0);

    for(i of tangerine){
        arr[i-1] += 1;
    }
    arr.sort((a, b) =>b-a);
    console.log("arr: ", arr);
    
    for(i=0; i<arr.length; i++){
        console.log("i: ", i);
        k -= arr[i];
        console.log("k: ", k);
        if(k <= 0){
            return i+1;
        }
    }
    
}

console.log(solution(3, [1, 1, 2, 2]));