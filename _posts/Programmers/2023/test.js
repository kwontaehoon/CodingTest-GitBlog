function solution(X, Y) {
    
    var answer = "";
    let temp = "";

    X.length > Y.length ? (console.log("hi"), temp = Y, Y = X, X = temp) : "";
    X = X.split("").sort((a, b) => b - a).join("");
    Y = Y.split("").sort((a, b) => b - a).join("");

    for(i=0; i<=X.length; i++){
        if(Y.length == 0) break;
        if(Y.includes(X.charAt(i))){
            Y = Y.replace(X.charAt(i), "");
            answer += X.charAt(i);
        }
    }

    console.log("answer: ", answer);

    return answer == "" ? "-1" : answer == 0 ? "0" : answer;
}

console.log(solution("5525", "1255"));