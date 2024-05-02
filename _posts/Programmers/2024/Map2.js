function solution(phone_book) {

    const hashMap = new Map();
  
    phone_book.filter(x => {
      hashMap.set(x, '');
    });
    console.log("hashMap: ", hashMap);
  
    for(let [key, value] of hashMap){
      for(let i=1; i<key.length; i++){
        let s = key.slice(0, i);  
  
        if(hashMap.has(s)) return false;
      }
    }
    return true;
  }
  
  console.log(solution(["119","97674223","1195524421"]));