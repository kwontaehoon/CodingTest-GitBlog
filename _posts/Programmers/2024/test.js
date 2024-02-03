function solution(s) {

  let arr = [];

  const parseStringToArray = (str) => {
    const elements = str.slice(2, -2).split('},{').map(subStr => subStr.split(',').map(Number));
    return elements;
  };

  s = parseStringToArray(s);

  s.sort((a, b) => a.length - b.length);

  for(let i of s){
    let t = i.filter(x => !arr.includes(x)).join("");
    arr.push(Number(t));
  }
  return arr;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));