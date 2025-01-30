function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length > arr2.length) {
        answer = 1;
    } else if(arr1.length < arr2.length) {
        answer = -1;
    } else {
        const initialValue = 0;
        const sumArr1 = arr1.reduce((a, b) => a + b, initialValue);
        const sumArr2 = arr2.reduce((a, b) => a + b, initialValue);

        if(sumArr1 === sumArr2) return answer;
        else if(sumArr1 > sumArr2) answer = 1;
        else answer = -1;
    }

    return answer;
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));