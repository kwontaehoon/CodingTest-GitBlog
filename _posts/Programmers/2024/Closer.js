function outer() {
    let count = 0; // 외부 함수의 지역 변수

    function inner() {
        count++; // 외부 함수의 지역 변수에 접근 및 변경
        console.log(count);
    }

    return inner; // 내부 함수 반환
}

const closureFunc = outer(); // 외부 함수 호출하여 내부 함수를 반환받음

console.log(closureFunc());
console.log(closureFunc());