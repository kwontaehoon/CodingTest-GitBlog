function solution(s) {

  const open = "[({";
  const close = "])}";

  let count = 0;

  s = s.split("");

  for(let i=0; i<s.length; i++){
    let answer = [];
    let lastElement = s.pop();
    s.unshift(lastElement);
    console.log("s: ", s);

    for(let j of s){
      if(open.indexOf(answer[answer.length-1]) !== -1 && open.indexOf(answer[answer.length-1]) == close.indexOf(j)){
        answer.pop();
      }else{
        answer.push(j);
      }
    }

    if(answer.length == 0 ) count++;
    console.log("answer: ", answer);
  }
  return count;

 
}

console.log(solution("[](){}"));