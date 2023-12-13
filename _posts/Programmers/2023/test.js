function solution(food) {
    const add = food.reduce((sum, curr) => sum + curr);
    const result = Array.from({ length: add % 2 == 0 ? add - 1 : add - 2 }, (_, index) => 0);
    food.map((x, index) => {
        if (index == 0) { return; }
        else {
            let count = result.indexOf(0);
            for (i = count; i < count + Math.floor(x / 2); i++) {
                result[i] = result[result.length - i - 1] = index;
            }
        };
    });
    return String(result.join(""));
}

console.log(solution([1,3,2,3]));