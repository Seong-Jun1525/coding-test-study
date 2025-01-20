function solution(arr, divisor) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            resultArr.push(arr[i]);
        }
    }
    if (resultArr.length === 0) resultArr.push(-1);

    return resultArr.sort((a, b) => a - b);
}

const arr = [2, 36, 1, 3];

console.log(solution(arr, 1));