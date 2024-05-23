function solution(emails) {

    let answer = 0;
    const alpabet = "abcdefghijklmnopqrstuvwxyz."

    for (let i = 0; i < emails.length; i++) {
        // console.log("x: ", emails[i].split("@"));
        const a = emails[i].split("@");
        // console.log("a[0]: ",a[0]);

        if (a[0].split("").filter(x => alpabet.includes(x)).join("") !== a[0] || a[0].length <= 0) {
            // console.log("1 탈락");
            continue;
        }

        console.log("a[1]: ", a[1]);
        let b = [];
        if (!a[1]) {
            console.log("2 탈락");
            continue;
        }

        b = a[1].split(".");
        // console.log("b: ", b);
        if (b[0].split("").filter(x => alpabet.slice(0, alpabet.length - 1).includes(x)).join("") !== b[0] || b[0].length <= 0) {
            console.log("3 탈락");
            continue;
        }

        console.log("b[1]: ", b[1]);
        if(b[1] == "com" || b[1] == "net" || b[1] == "org"){
            console.log(123);
            answer++;
        }
    }
    return answer;

}

console.log(solution(["d@co@x.com", "a@abc.com", "b@def.com", "c@ghi.net"]));