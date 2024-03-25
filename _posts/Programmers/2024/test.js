function solution(progresses, speeds) {

  var answer = [];
  const arr = [];
  let a = [];

  for(let i=0; i<progresses.length; i++){

    let sum = progresses[i];
    let count = 0;
    while(sum < 100){
      sum += speeds[i];
      count++;
    }

    arr.push(count);
    console.log("arr: ", arr);
    
  }

  let max = arr[0];
  a.push(arr[0]);
  arr.shift();
  console.log("arr2: ", arr);

  for(let i=0; i<arr.length; i++){
    console.log("i: ", i);
    if(max >= arr[i]){
      a.push(arr[i]);
    }else{
      answer.push(a.length);
      a = [arr[i]];
      max = arr[i];
    }
    console.log("a: ", a);
  }
  answer.push(a.length);

  return answer;
}

console.log(solution([98,99,98], [1,1,1]));