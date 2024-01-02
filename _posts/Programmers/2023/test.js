function solution(n, lost, reserve) {

    let answer = 0;
    let lost_filter;
    let reserve_filter;

    lost_filter = lost.filter(e => !reserve.includes(e)).sort((a, b)=> a-b);
    reserve_filter = reserve.filter(e => !lost.includes(e)).sort((a, b)=> a-b);

    lost_filter.filter(x=>{
        if(reserve_filter.includes(x-1)){
            answer++;
            reserve_filter.splice(reserve_filter.indexOf(x-1), 1);
        }else if(reserve_filter.includes(x+1)){
            answer++;
            reserve_filter.splice(reserve_filter.indexOf(x+1), 1);
        }
    });
    answer = n - lost_filter.length + answer;

    return answer;
}

console.log(solution(5, [4, 5], [3, 4]));