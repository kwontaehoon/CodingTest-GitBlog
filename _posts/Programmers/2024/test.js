function solution(s) {

    const answer = [];

    s.split("").map(x=>{
        if(x === ")" && answer[answer.length-1] === "("){
            answer.pop();
        }else{
            answer.push(x);
        }
    });
    console.log("answer: ", answer);

    return answer.length === 0;

}

console.log(solution("))"));