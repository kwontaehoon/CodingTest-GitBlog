function solution(nums) {
    var result = 0;
    for(i=0; i<=nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            for(k=j+1; k<nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k];
                let count = 0;
                for(q=1; q<=sum; q++){
                    if(sum%q == 0)count++;
                }
                count == 2 ? result++ : ''
            }
        }
    }
    return result;
}
console.log(solution([1,2,7,6,4]));