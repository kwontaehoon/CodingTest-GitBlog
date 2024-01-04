function solution(numbers, hand) {

    var answer = "";
    let LCurr = "*";
    let RCurr = "#";

    numbers.filter((x, index)=>{
        console.log("xxxxxxxxxxxxxxxxxx: ", x);

        switch(x){
            case 1: case 4: case 7: console.log("왼손입니다."); LCurr = x; answer += "L"; break;
            case 3: case 6: case 9: console.log("오른손입니다"); RCurr = x; answer += "R"; break;
            case 0: {
                console.log("0 입니다.");

                console.log("L 현재위치, L 거리: ", LCurr, x-LCurr);
                console.log("R 현재위치, R 거리: ", RCurr, x-RCurr);

                if(isNaN(x-LCurr) && !isNaN(x-RCurr)){
                    console.log("왼손 * 또는 #");
                    LCurr = 2;
                }
                if(!isNaN(x-LCurr) && isNaN(x-RCurr)){
                    console.log("오른손 * 또는 #");
                    RCurr = 2;
                }

                if(Math.abs(LCurr-RCurr) == 2 || (LCurr == "*" && RCurr == "#") || (LCurr == "#" && RCurr == "*")){
                    hand == "left" ? (LCurr = x, answer += "L", console.log("같아서 왼손누름")) : (RCurr = x, answer += "R", console.log("같아서 오른손누름"));  
                }else if(Math.abs(x-LCurr) < Math.abs(x-RCurr)){ // 왼손이 가까운 경우
                    LCurr = x;
                    answer += "L";
                    console.log("왼속 누름");
                }else if(Math.abs(x-LCurr) > Math.abs(x-RCurr)){ // 오른손이 가까운 경우
                    RCurr = x;
                    answer += "R";
                    console.log("오른손 누름");
                }
            };
            default: {
                console.log("2,5,8 입니다.");

                console.log("L 현재위치, L 거리: ", LCurr, x-LCurr);
                console.log("R 현재위치, R 거리: ", RCurr, x-RCurr);

                if((Math.abs(x-LCurr) == 1 && Math.abs(x-RCurr) == 1) || (Math.abs(x-LCurr) == 1 && Math.abs(x-RCurr) == 3) || (Math.abs(x-RCurr) == 3 && Math.abs(x-RCurr) == 1)){
                    hand == "left" ? (LCurr = x, answer += "L", console.log("같아서 왼손누름")) : (RCurr = x, answer += "R", console.log("같아서 오른손누름"));

                }else if(Math.abs(x-LCurr) < Math.abs(x-RCurr)){ // 왼손이 가까운 경우
                    LCurr = x;
                    answer += "L";
                    console.log("왼속 누름");
                }else if(Math.abs(x-LCurr) > Math.abs(x-RCurr)){ // 오른손이 가까운 경우
                    RCurr = x;
                    answer += "R";
                    console.log("오른손 누름");
                }
            }  
        }
    });
    console.log("answer: ", answer);
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));