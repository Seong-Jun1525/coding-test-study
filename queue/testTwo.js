class Queue {
    items = [];
    front = 0;
    rear = 0;

    // 생성자
    constructor(arr) {
        this.items = arr;
        this.rear = arr.length;
    }

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    pop() {
        return this.items[this.front++];
    }

    // front에 해당하는 값 반환
    first() {
        return this.items[this.front];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(card1, card2, goal) {
    // 카드와 목표를 Queue로 변환
    card1 = new Queue(card1);
    card2 = new Queue(card2);
    goal = new Queue(goal);

    while (!goal.isEmpty()) {
        if (!card1.isEmpty() && card1.first() === goal.first()) {
            card1.pop();
            goal.pop();
        }
        else if (!card2.isEmpty() && card2.first() === goal.first()) {
            card2.pop();
            goal.pop();
        }
        else {
            break;
        }
    }

    return goal.isEmpty() ? "Yes" : "No";
}