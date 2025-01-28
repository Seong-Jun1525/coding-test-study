function solution(numer1, denom1, numer2, denom2) {
    // 분모들의 최소공배수(LCD) 계산
    let lcmValue = lcm(denom1, denom2);
    
    // 분모를 통일하고 분자 계산
    numer1 *= lcmValue / denom1;
    numer2 *= lcmValue / denom2;
    
    // 분자 더하기
    let n = numer1 + numer2;

    // 결과를 최대공약수로 간소화
    let gcdResult = gcd(n, lcmValue);
    n /= gcdResult;
    lcmValue /= gcdResult;

    return [n, lcmValue];
}

// 최대공약수 계산
function gcd(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

// 최소공배수 계산
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 테스트
console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6]
console.log(solution(1, 35, 1, 55)); // [18, 385]