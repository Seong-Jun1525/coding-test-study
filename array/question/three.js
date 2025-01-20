// 두 개 뽑아서 더하기
// 두 개를 뽑아서 더하여 만들 수 있는 수를 모두 만들고 오름차순 정렬
const numbers = [2, 1, 3, 4, 1];

solution(numbers);

function solution(numbers) {
    const arr = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }

    console.log([...new Set(arr)].sort((a, b) => a - b));

    return [...new Set(arr)].sort((a, b) => a - b);
}
