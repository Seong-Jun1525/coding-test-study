// 중복 값 없이 내림차순 정렬
const arr = [4, 2, 2, 1, 3, 4];

function solution(arr) {
    const uniqueArr = [...new Set(arr)]; // 중복 값 제거
    uniqueArr.sort((a, b) => b - a); // 내림차순 정렬
    return uniqueArr;
}

console.log(solution(arr));