function solution(card, word) {

    let answer = [];
    let stack = [];
    let copy_card = [...card];

    word.filter((x, x_index) => {
        let count = 0;
        console.log("x: ", x);

        for (let i = 0; i < x.length; i++) {
            console.log("i: ", x[i]);

            for(let j=0; j < card.length; j++){
                console.log("j: ", card[j]);
                if(copy_card[j].includes(x[i])){
                    console.log("포함: ", x[i]);
                    stack.push(copy_card.findIndex(x => x === copy_card[j]));
                    copy_card[j] = copy_card[j].replace(x[i], "");
                    console.log("copy_card: ", copy_card);
                    count++;
                    break;
                }
            }
        }
        console.log("stack: ", [...new Set(stack)].sort());
        (count == x.length && card.filter((_, index) => index == [...new Set(stack)].sort()[index]).length == card.length) ? answer.push(x) : "";
        stack = [];
        copy_card = [...card];
        console.log();
    });
    return answer.length == 0 ? ["-1"] : answer;
}

// console.log(solution(["ABACDEFG", "NOPQRSTU", "HIJKLKMM"], ["GPQM", "GPMZ", "EFU", "MMNA"]));
console.log(solution(["AABBCCDD", "KKKKJJJJ", "MOMOMOMO"], ["AAAKKKKKMMMMM", "ABCDKJ"]));