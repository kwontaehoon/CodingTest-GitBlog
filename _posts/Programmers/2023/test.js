function solution(name, yearning, photo) {
    return photo.map(x=>{
        return x.map(y=>{
            return name.indexOf(y) == -1 ? 0 : yearning[name.indexOf(y)]
        }).reduce((sum, curr)=>sum+curr);
    });
}

console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));