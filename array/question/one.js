// 정렬
const arr = [1, -5, 2, 4, 3];
const arr1 = [1, 10, 5, 3, 100];

// function solution1(arr) {
//     arr.sort((a, b) => a - b);
//     return arr;
// }
function solution1(arr1) {
    arr1.sort(); // 아무조건이 없을 경우 문자열로 가정하고 정렬함.
    return arr1;
}

function solution2(arr1) {
    arr1.sort((a, b) => a - b);
    // 결과값이 양수일 경우 a가 커서 a가 앞에 오고
    // 음수일경우 b가 커서 b가 앞에 오고
    // 0일 경우 위치 변환 x 
    return arr1;
}

console.log(solution1(arr1));
console.log(solution2(arr1));