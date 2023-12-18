    function solution(cards1, cards2, goal) {
        const answer = goal.map(x=>{
            if(cards1[0] == x){ cards1.shift(); return 1; }
            if(cards2[0] == x){ cards2.shift(); return 1; }
        });
        return answer.includes() ? 'No' : 'Yes'
    }

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));