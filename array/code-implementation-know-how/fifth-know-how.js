// 배열 내 같은 요소 제거
const names = ['Lee', 'Kim', 'Lim', 'Park', 'Lee', 'Kim'];
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);