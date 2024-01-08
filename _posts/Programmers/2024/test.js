function solution(survey, choices) {

    var answer = Array.from({length: 4}, () => 0);
    const type = ["RT", "CF", "JM", "AN"];
    const graph = [
        {select: 1, score: 3},
        {select: 2, score: 2},
        {select: 3, score: 1},
        {select: 4, score: 0},
        {select: 5, score: 1},
        {select: 6, score: 2},
        {select: 7, score: 3}
    ];

    for(i=0; i<survey.length; i++){
        let diff = survey[i].split("").sort().join("");
        let typeNumber = type.indexOf(diff);
        if(choices[i] > 3){
            answer[typeNumber] += graph[choices[i]-1].score * (diff !== survey[i] ? -1 : 1);
        }else{
            answer[typeNumber] -= graph[choices[i]-1].score * (diff !== survey[i] ? -1 : 1);
        }
    }

    return answer.map((x, index) => {
        if(x > 0){ return type[index].charAt(1); }else return type[index].charAt(0);
    }).join("");
}

console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));