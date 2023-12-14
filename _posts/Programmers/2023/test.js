function solution(numbers) {
    var answer = [];
    for(i=0; i<=numbers.length; i++){
        for(j=i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));