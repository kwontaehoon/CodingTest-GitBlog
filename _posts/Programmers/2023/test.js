function solution(strings, n){
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        console.log("chr1: ", chr1);
        const chr2 = b.charAt(n);
        console.log("chr2: ", chr2);

        if (chr1 == chr2) {
            console.log("==: ", a>b, (a > b) - (a < b));
            return (a > b) - (a < b);
        } else {
            console.log("else: ", (chr1 > chr2) ,(chr1 > chr2) - (chr1 < chr2));
            return (chr1 > chr2) + (chr1 < chr2);
        }
    })
}

console.log(solution(["sun", "bed", "car", ], 1));