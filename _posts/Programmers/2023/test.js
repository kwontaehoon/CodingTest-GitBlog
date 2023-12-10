function solution(number) {
    var answer = 0;
    for (i = 0; i <= number.length; i++) {
        for (j = i + 1; j < number.length; j++) {
            console.log("aa: ", number[i], number.slice(j, j+2), number.slice(j, j+2).reduce((sum, curr)=>sum+curr));
            if (number[i] + number.slice(j, j+2).reduce((sum, curr)=>sum+curr) == 0) {
                console.log("gggggggggggggg: ", number[i], number.slice(j, j+2));
                answer++;
            }
        }
    }
    console.log("answer: ", answer);
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));