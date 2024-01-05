function solution(players, callings) {

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

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));