// 실패율
const stages = [2, 1, 2, 6, 2, 4, 3, 3]
const n = 5;

console.log(solution(n, stages));

function solution(n, stages) {
    // 도전자 수 구하기
    const challenger = new Array(n + 2).fill(0);
    for (const stage of stages) {
        challenger[stage] += 1;
    }

    // console.log("challenger : " + challenger);

    // 스테이지 별 실패한 사용자 수 계산
    const fails = {};
    let total = stages.length;

    // 각 스테이지를 순회하며 실패율 계산
    for (let i = 1; i <= n; i++) {
        // 도전한 사람이 없는 경우 실패율은 0
        if (challenger[i] === 0) {
            fails[i] = 0;
            continue;
        }

        // 실패율 계산
        fails[i] = challenger[i] / total;

        // 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
        total -= challenger[i];
    }

    // 실패율이 높은 스테이지부터 내림차순 정렬
    // entries를 사용하면 키와 값을 쌍으로 묶어서 배열을 만들 수 있음
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

    // 스테이지 번호만 반환
    return result.map((num) => Number(num[0]));
}