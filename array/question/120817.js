// 배열의 평균 값
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(solution(numbers));

function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}