function solution(customer) {

    let answer = 0;

    let stack = [];

    customer = customer.sort((a, b) => a[0] - b[0]);
    console.log("customer: ", customer);

    customer.filter((x, index) => {
        console.log("x: ", x);
        if(index === 0){
            stack.push(...x);
        }else{
            console.log("aa: ", stack[stack.length-1]);
            if(stack[stack.length-1] > x[0]){
                console.log("push");
                stack.push(...x);
                stack = stack.sort((a, b) => a - b);
                console.log("stack: ", stack);
            }else {
                console.log("새로만들어짐");
                answer += x[1] - x[0];
                console.log("answer: ", answer);
            }
        }
    });
    
    console.log("stack: ", stack);
    answer += stack[stack.length-1] - stack[0];
    return answer;

}

// console.log(solution([[1,4],[3,5],[8,10]]));
console.log(solution([[200,300],[100,200]]));