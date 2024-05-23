function solution(p, m, d) {

    let count = 0.01;

    if(p >= d) return 0;

    while(d > p){
        for(let i=1; i<m; i++){
            p = Math.floor(p * (1 + count));
        }
        count += 0.01;
    }
    return (count-0.01)*100;
}

console.log(solution(100, 2, 150));