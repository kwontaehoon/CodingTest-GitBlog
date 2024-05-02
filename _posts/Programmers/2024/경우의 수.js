function solution(clothes) {
    let types = new Map(); // 각 종류별 의상 수를 저장할 Map

    // 각 종류별 의상 수 계산
    for (let [name, type] of clothes) {
        console.log("type: ", type);
        if (types.has(type)) {
            types.set(type, types.get(type) + 1);
        } else {
            types.set(type, 1);
        }
        console.log("types: ", types);
    }
    console.log("types: ", types);

    let answer = 1;

    // 각 종류별 의상을 선택하는 경우의 수를 곱하여 계산
    for (let count of types.values()) {
        answer *= (count + 1); // 해당 종류의 의상을 선택하지 않는 경우까지 포함하여 +1
    }

    // 모든 종류의 의상을 선택하지 않는 경우는 제외
    return answer - 1;
}

// 테스트
const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));