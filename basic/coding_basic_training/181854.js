function solution(arr, n) {
    var answer = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr.length % 2 === 0) {
            if(i % 2 !== 0) arr[i] += n;
        } else {
            if(i % 2 === 0) arr[i] += n;
        }
        answer.push(arr[i]);
    }

    

    return answer;
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));