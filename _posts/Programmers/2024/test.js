function solution(s){
    
  let answer = [];

  for(i of s){
      if(i == answer[answer.length-1]){
          answer.pop();
      }else answer.push(i);
  }

  return answer.length == 0 ? 1 : 0;
}

console.log(solution("baabaa"));
// 50 50 70 80