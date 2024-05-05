const test = [1, 2, 3, 5, 1, 2, 3, 4, 6];

const map = new Map();

for(const a of test){
    map.set(a, (map.get(a) || 0) + 1 );
}

console.log("map: ", map);

console.log(Array.from(map.keys()));

const test2 = [["head", "redHat"], ["head", "blueHat"], ["body", "greenPants"], ["shooes", "blackNewNike"]];

const map2 = new Map();

for(let [keys, values] of test2){
    map2.set(values, (map2.get(values) || 0) + 1);
}

console.log("map2: ", map2);