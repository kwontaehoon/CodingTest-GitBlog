function solution(speed_limit, cameras) {
    let answer = 0;
    let arr = [0, 0];

    cameras.filter(x => {
        arr[0] = x[0] - arr[0];
        arr[1] = x[1] - arr[1];

        if(arr[0]/arr[1] > speed_limit){
            answer++;
        }
        arr[0] = x[0];
        arr[1] = x[1];
    });
    return answer;
}