// readline 모듈을 가져옵니다. 이 모듈은 Node.js에서 입력 스트림(예: 콘솔 입력)을 처리하는 데 사용됩니다.
const readline = require('readline');

// readline 인터페이스를 생성합니다.
// input: 표준 입력(stdin)을 입력 스트림으로 사용
// output: 표준 출력(stdout)을 출력 스트림으로 사용
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력 데이터를 저장할 배열을 초기화합니다.
let input = [];
let output = ""; // 출력 문자열을 저장할 변수

// 'line' 이벤트는 사용자가 입력하고 Enter를 누를 때마다 발생합니다.
// 사용자가 입력한 데이터를 `line` 변수로 받아옵니다.
rl.on('line', function (line) {
    // 입력 받은 데이터를 공백(' ')을 기준으로 나누어 배열로 저장합니다.
    input = line.split(' ');
})
// 'close' 이벤트는 입력 스트림이 종료될 때 발생합니다.
// 일반적으로 Ctrl+D(리눅스/맥) 또는 Ctrl+Z(윈도우)로 입력을 종료할 수 있습니다.
.on('close', function () {
    // 입력받은 첫 번째 값을 숫자로 변환합니다.
    const triangle = Number(input[0]);

    // 삼각형을 출력할 문자열 생성
    for (let i = 0; i < triangle; i++) {
        for (let j = 0; j < i + 1; j++) {
            output += "*"; // 문자열에 '*' 추가
        }
        output += "\n"; // 줄바꿈 추가
    }

    // 최종적으로 출력 문자열을 한 번에 출력
    console.log(output);
});
