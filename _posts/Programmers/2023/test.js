function solution(k, m, score) {

    const aa = score.reduce((sum, curr)=>sum+curr);
    console.log("aa: ", aa);
    var answer = [];
    const test = score.sort((a, b) => b - a).join("");
    console.log("test: ", test);

    for(i=0; i<k; i++){
        answer.push(test.substring(i*m, i*m+m).split("").sort());
    }
    console.log("answer: ", answer);

    const test3 = answer.filter(x=>x.length == m);
    console.log("test3: ", test3);

    const test4 = test3.reduce((sum, curr)=>{
        console.log("sum: ", sum);
        console.log("curr: ", curr[0]);
        return Number(sum) + Number(curr[0])*m
    }, 0);
    console.log("test4: ", test4);
    
    
}
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));