function solution(a, b, flag) {
    return flag ? a + b : a - b;
}

console.log(solution(-4, 7, true));
console.log(solution(-4, 7, false));