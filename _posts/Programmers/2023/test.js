function solution(keymap, targets) {

    var answer = [];

    for(i=0; i<targets.length; i++){
        let count = 0;
        for(j=0; j<targets[i].length; j++){

            const arr = Math.min(...keymap.map(x=>{
                return x.indexOf(targets[i].charAt(j)) + 1;
            }).filter(x=>x !== 0));

            if(isFinite(arr) == 0){
                count = -1;
                break;
            }else{ count += isFinite(arr) ? arr : 0; }
        }
        count == 0 ? answer.push(-1) : answer.push(count);
    }
    return answer;
}

console.log(solution(["ABCDE","ABBCE"], ["ABBEF"]));