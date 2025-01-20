// 리터럴를 이용한 배열선언
const arr = [0, 0, 0, 0, 0, 0];

// 배열 생성자를 이용한 방법
const arr1 = new Array(6); // [undefined, undefined, ...] 이기 때문에 비어있는 배열
const arr2 = [...new Array(6)].map((_, i) => i + 1);
const arr3 = new Array(6).fill(0);

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log("================================");

// 배열은 2차원, 3차원 배열이 있지만 컴퓨터 구조는 1차원이므로 2, 3차원 배열도 실제로는 1차원 공간에 저장함.
// 즉, 배열은 차원과는 무관하게 메모리에 연속할당됨.

// 리터럴 2차원 배열
const arr4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(arr4[1, 3]);
console.log("================================");

// 다른 방법
const arr5 = [...new Array(3)].map((_, i) => new Array(4).fill(i));
console.log(arr5);