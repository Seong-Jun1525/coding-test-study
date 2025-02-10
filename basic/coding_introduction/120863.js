/**
 * 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
 * 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
 * 
 * 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
 * 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
 * 
 * 같은 식이라면 가장 짧은 수식을 return 합니다.
 */

// function solution(polynomial) {
//     let sum = 0;
//     let x = 0;
//     let polynomialArr = polynomial.split(" ");

//     for(let i = 0; i < polynomialArr.length; i++) {
//         if((polynomialArr[i] === "+")) continue;
//         else {
//             if((polynomialArr[i].length === 1) && (polynomialArr[i] !== "x")) {
//                 sum += parseInt(polynomialArr[i]);
//             } else {
//                 let v;
//                 if((polynomialArr[i] === "x")) {
//                     v = 1;
//                 } else {
//                     let vv = polynomialArr[i].split("x");
//                     v = parseInt(vv[0]);
//                 }
//                 x += v;
//             }
//         }
//     }

//     let result = ((x > 0) ? x + "x" : "") + ((sum > 0) ? (" + " + sum) : "");  

//     return result;
// }
function solution(polynomial) {
    let sum = 0;
    let x = 0;
    let polynomialArr = polynomial.split(" ");

    for (let i = 0; i < polynomialArr.length; i++) {
        if (polynomialArr[i] === "+") continue;

        if (polynomialArr[i] === "x") {
            x += 1;
        } else if (polynomialArr[i].includes("x")) {
            x += parseInt(polynomialArr[i].split("x")[0]);
        } else {
            sum += parseInt(polynomialArr[i]);
        }
    }

    // 출력 형식 조정
    let result = [];
    if (x > 0) result.push(x === 1 ? "x" : `${x}x`);
    if (sum > 0) result.push(`${sum}`);

    return result.join(" + ");
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
console.log(solution("123x"));