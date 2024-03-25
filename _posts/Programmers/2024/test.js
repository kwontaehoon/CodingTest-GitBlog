function solution(numbers) {

  const answer = Array.from({length: numbers.length}, () => -1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
      while (stack.length !== 0 && numbers[i] >= stack.at(-1)) {
        console.log("while");
        stack.pop();
      }
      if (stack.length !== 0){
        answer[i] = stack.at(-1);
      }
      stack.push(numbers[i]);
    
      console.log("stack: ", stack);

      console.log("answer: ", answer);
  }
  return answer;
}

console.log(solution([9,1,5,3,6,2]));