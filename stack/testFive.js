const arr = [1, 6, 9, 5];

console.log(solution(arr));

function solution(arr) {
    let count = 0;
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                count += 1;
            }
            else {
                count += 1;
                break;
            }
        }
        stack.push(count);
        count = 0;
    }

    return stack;
}