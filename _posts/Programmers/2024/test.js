function solution(brown, yellow) {

    for(i=brown/2-1; i>=3; i--){
        let height = (brown-i*2)/2+2;
        if((i-2) * (height-2) == yellow){
            return [i, height];
        }
    }
}

console.log(solution(24, 24));