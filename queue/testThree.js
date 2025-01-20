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

    first() {
        return this.items[this.front];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

const truck_weights = [10];
const bridge_length = 100;
const weight = 100;

console.log(solution(bridge_length, weight, truck_weights));

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    truck_weights = new Queue(truck_weights);
    const stack = [];
    let count = 0;
    while (!truck_weights.isEmpty() || stack.length > 0) {
        time++;
        const stackWeight = stack.reduce((a, b) => a + b, 0);
        // console.log(stackWeight);
        // console.log(truck_weights.first());
        // console.log(stack.length);

        if (stack.length === 0
            || (
                (stackWeight + truck_weights.first() <= weight)
                && (count < bridge_length)
            )) {
            stack.push(truck_weights.first());
            truck_weights.pop();
            count++;
        }
        else {
            count = 0;
            stack.pop();
        }

        // console.log(truck_weights);
    }
    // console.log(stack.length);
    return time;
} 