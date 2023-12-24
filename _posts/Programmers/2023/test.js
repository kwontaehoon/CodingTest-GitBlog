function solution(number, limit, power) {

    var answer = [];

    for(i=1; i<=number; i++){
        let count = 0;
        for(j=1; j<=Math.sqrt(i); j++){
            if(i == 1){ count++; continue; }
            if(i%j == 0)count+=2;
            if(i/j == Math.sqrt(i))count--;
        }
        answer.push(count);
    }

    return answer.reduce((sum, curr) => {
        return curr > limit ? sum+power : sum+curr;
    });
   
}
console.log(solution(10, 3, 2));