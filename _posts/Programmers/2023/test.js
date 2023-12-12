function solution(s) {
    return s.split("").map((x, index, arr)=>{
        if(arr.slice(0, index).lastIndexOf(x)+1 == 0){
            return -1;
        }else{
            return index-arr.slice(0, index).lastIndexOf(x);
        }
    });
}

console.log(solution("banana"));