// 영어가 싫어요
function solution(numbers) {
    var answer = 0;
    let numberArr = [];
    let result = "";
    let i = 0;

    // 숫자와 일치하는 문자열들
    const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    while (numbers.length > 0) {
        // numberArr에 문자가 충분히 쌓였을 때
        if (numberArr.length >= 3) {
            let checkNum = numberArr.join(""); // numberArr를 문자열로 합침
            // 숫자 단어와 비교하여 처리
            const index = numWords.indexOf(checkNum);
            if (index !== -1) { // 숫자 단어를 찾았다면
                result += index; // 해당 숫자 결과에 추가
                numbers = numbers.replace(checkNum, ""); // numbers에서 해당 단어를 제거
                numberArr = []; // numberArr를 초기화
                i = 0; // 다시 처음부터 체크하도록 i값을 초기화
            }
        }

        // numberArr에 문자를 추가
        if (i < numbers.length) {
            numberArr.push(numbers[i]);
            i++;
        }
    }

    // 최종적으로 계산된 숫자를 반환
    answer = parseInt(result);
    return answer;
}

console.log(solution("onefourzerosixseven")); // 14067