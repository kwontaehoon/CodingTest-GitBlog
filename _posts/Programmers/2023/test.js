function solution(d, budget) {
    // var answer = 0;
    // const d_sum = d.sort((a, b)=> a - b).reduce((sum, curr, index)=>{
    //     if(sum <= budget){ answer = index; }return sum+curr;
    // });
    // return d_sum == budget ? d.length : d_sum < budget ? answer+1 : answer;

    return d.sort((a, b) => a - b).reduce((count, price) => {
        console.log('aa: ', count, price, budget, (budget -= price) >= 0);
        return count + true;
    }, 0);
}

console.log(solution([3,5,5,6], 9));