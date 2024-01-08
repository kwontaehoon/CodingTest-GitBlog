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

3. 반복문을 돌릴 때 index를 이용해 맨앞과 맨뒤의 배열을 같이 순환하는 코드도 구현해봤지만 제한사항의 배열의 길이가
너무 큰 나머지 시간초과가 발생했다. 객체를 사용하여 해당 index를 바로 조회할 수 있어서 통과했다.
배열을 객체로 바꿔서 조회하는 코드를 외워야겠다. number.120
-   function solution(players, callings) {

    const keyPlayers = {}
    const keyRanks = {}

    players.filter((x, index)=>{
        const rank = index+1;
        keyPlayers[x] = rank;
        keyRanks[rank] = x;
    })

    callings.filter(x=>{
        const losePlayer = keyRanks[keyPlayers[x]-1];

        keyRanks[keyPlayers[x]] = losePlayer;
        keyRanks[keyPlayers[losePlayer]] = x;
        keyPlayers[x] -= 1;
        keyPlayers[losePlayer] += 1;
    })

    return Object.values(keyRanks);
}