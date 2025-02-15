// 3번 방식
class Node {
    constructor(data) {
        this.data = data; // 요소 값
        this.next = null; // 다음 요소 참조
    }
}

class Queue {
    constructor() {
        this.head = null; // 첫 번째 요소 참조
        this.tail = null; // 마지막 요소 참조
        this.size = 0; // 큐의 길이
    }

    push(data) {
        const newNode = new Node(data);

        if (!this.head) {
            // 큐가 비어 있을 경우 head와 tail 모두 새로 생성한 요소로 설정
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // 그렇지 않을 경우 tail의 next 속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조하도록 변경
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    pop() {
        if (!this.head) {
            // head가 null이면 비어 있다는 뜻
            return null;
        }

        // 두 번째 요소를 head의 참조로 변경하면
        // 자연스럽게 첫 번째 요소가 사라짐
        const removeNode = this.head;
        this.head = this.head.next;

        // 만약 두 번째 요소가 없을 경우
        // 큐가 비어있다는 뜻이니 tail도 null로 설정
        if (!this.head) {
            this.tail = null;
        }

        this.size--;

        return removeNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}