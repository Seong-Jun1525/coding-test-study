/**
 * 큐를 구현하는 방식
 * 1. 배열의 push(), shift() 메서드 활용
 * 2. 배열로 큐를 구현
 * 3. 연결리스트로 큐를 구현
 * 
 * shift() 메서드는 배열의 첫 번째 요소를 삭제하는 메서드
 *  - 시간 복잡도가 O(1)이 아니기 때문에 shift를 사용한다고 진짜 큐는 아님
 */

// 1번 방식
const queueOne = [];

queueOne.push(1);
queueOne.push(2);
queueOne.push(3);

// 큐의 맨앞 제거
let firstItem = queueOne.shift();
console.log(firstItem);

queueOne.push(4);
queueOne.push(5);

firstItem = queueOne.shift();
console.log(firstItem);

// 2번 방식
class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    pop() {
        return this.items[this.front++];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}