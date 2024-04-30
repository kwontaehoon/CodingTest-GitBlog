function solution(land){
  let answer = 0;
  let count = null;
  let rank = 0;

  for(let i=0; i<land.length; i++){
    console.log("i: ", i);

    let max = 0;

    for(let j=0; j<land[i].length; j++){
      console.log("j: ", j, count, rank);
      if(i == land.length-1){
        answer += Math.max(...land[land.length-1].filter((_, index) => index !== rank));
        return answer;
      }
      console.log("aa: ", land[i][j], Math.max(...land[i+1].filter((_, index)=> index !== j)));
      if(rank !== j && land[i][j] + Math.max(...land[i+1].filter((_, index)=> index !== j)) > max){
        max = land[i][j] + Math.max(...land[i+1].filter((_, index)=> index !== j));
        count = j;
      }
      console.log("max: ", max, count);
    }
    answer += land[i][count];
    rank = count;
    console.log("result: ", answer, count);

  }
}

console.log(solution([[1,2,3,5], [5,6,7,8], [4,3,2,1]]));