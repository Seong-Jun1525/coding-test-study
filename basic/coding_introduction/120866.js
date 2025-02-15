// 안전 지대

function solution(board) {
    let answer = 0;
    // 8방향을 탐색해야 하므로 델타 배열을 활용해야한다
    /**
     * (-1, +1) (0, +1) (+1, +1)
     * (-1, 0)          (+1, 0)
     * (-1, -1) (0, -1) (+1, -1)
     * 
     * 
     * (-1, -1) 부터 (0, -1) 까지
     */
    const dangerArea = [
        [-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]
    ]; // 위험지역 xy좌표
        
    // 2차원 배열을 순회하며 지뢰(1)의 위치를 찾음
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {  // 지뢰가 있는 경우
                // 8방향을 탐색하여 위험 지역 표시
                dangerArea.map((v) => {
                    let [x, y] = v;       // 델타 배열에서 x, y 좌표 이동값 가져오기
                    [x, y] = [x + i, y + j]; // 현재 위치 (i, j)에서 이동한 좌표 계산
                    
                    // 배열 범위 내에 있고, 해당 위치가 안전 지역(0)인 경우
                    if (
                        (x >= 0) && (x < board.length) &&  // x 좌표가 유효한 범위인지 확인
                        (y >= 0) && (y < board[i].length) &&  // y 좌표가 유효한 범위인지 확인
                        (board[x][y] === 0)  // 현재 위치가 안전 지역인지 확인
                    ) {
                        board[x][y] = 2;  // 위험 지역(2)로 표시
                    }
                });
            }
        }
    }

    // 2차원 배열을 순회하며 안전 지역(0)의 개수를 세기
    board.map(row => row.map(cell => cell === 0 ? answer++ : 0));

    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));