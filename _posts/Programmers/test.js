function solution(bid, ask, n) {

    ask.sort((a, b) => a - b);
    console.log("ask: ", ask);
    bid.sort((a, b) => b - a);
    console.log("bid: ", bid);

    const a = ask.slice(0, n/2).reduce((prev, curr) => prev+curr);
    console.log("a: ", a);
    const b = bid.slice(0, n/2).reduce((prev, curr) => prev+curr);
    console.log("b: ", b);
    return b-a < 0 ? 0 : b-a;
}

console.log(solution([1, 2, 3, 5], [1, 2, 3, 5], 6));