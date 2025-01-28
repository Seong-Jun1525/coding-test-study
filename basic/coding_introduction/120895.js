// function solution(my_string, num1, num2) {
//     var answer = '';
    
//     let strArr = my_string.split("");
//     let temp = strArr[num1];
//     strArr[num1] = strArr[num2];
//     strArr[num2] = temp;

//     answer = strArr.join("");

//     return answer;
// }

// 문자열의 두 인덱스의 값을 교환하는 함수
function solution(my_string, num1, num2) {
    // 문자열을 배열로 변환 (문자열은 불변이기 때문에 배열로 처리)
    let strArr = my_string.split(""); 

    // 구조 분해 할당을 이용해 num1과 num2 위치의 값을 교환
    // [strArr[num1], strArr[num2]] = [strArr[num2], strArr[num1]];
    // 1. 오른쪽: strArr[num2]와 strArr[num1]의 값을 평가해 배열로 생성
    // 2. 왼쪽: 해당 배열의 값들을 strArr[num1]과 strArr[num2]에 순서대로 할당
    [strArr[num1], strArr[num2]] = [strArr[num2], strArr[num1]];

    // 배열을 다시 문자열로 변환하여 반환
    return strArr.join("");
}

console.log(solution("I love you", 3, 6));