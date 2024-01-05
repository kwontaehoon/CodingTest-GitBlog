1. sort() 함수에서 짚고 가야할 것 Number.95

- js에서는 true = 1 / false = 0
- 삽입 정렬 알고리즘을 사용(다음 요소와 비교)
- sort(a, b) 일 때 a는 다음요소, b는 첫/이전 요소

2. 에라토스테네스의 체의 알고리즘을 이용한다. Number.108

- 에라토스테네스의 체: 고대 그리스의 수학자 에라토스테네스가 만들어 낸 소수를 찾는 방법. Number.108
- function getResult(n){
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
- 2부터 해당 값의 제곱근까지 반복하면서 해당 수의 배수를 지우고 남는 수를 구하는 것으로 효율적

3. number.120