function solution(left, right) {
    console.log(Math.sqrt(16));
    let sum = 0;
    for(i=left; i<=right; i++){
        Array(i).fill().map((_, index)=>index+1).filter(x=>i%x==0).length%2==0 ? sum+=i : sum-=i;
    }
    return sum;
}

console.log(solution(13, 17));