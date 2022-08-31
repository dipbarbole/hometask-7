import { QElement } from "./QElement";

export class PriorityQueue {

    private items: QElement[];
    constructor()
    {
        this.items = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return (index * 2) + 1;
    }

    rightChild(index) {
        return (index * 2) + 2;
    }

    isLeaf(index) {
        return (
            index >= Math.floor(this.items.length / 2) && index <= this.items.length - 1
        )
    }

    swap(index1, index2) {
        [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
    }

    enqueue(element, priority) {
        const qElement = new QElement(element, priority);
        this.items.push(qElement);
        this.heapifyUp(this.items.length - 1);
    }

    heapifyUp(index) {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        while (currentIndex > 0 && this.items[currentIndex].priority > this.items[parentIndex].priority) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    extractMax() {
        if (this.items.length < 1) {
            return 'heap is empty';
        }

        const max = this.items[0];
        const end = this.items.pop();
        this.items[0] = end;
        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index) {
        if (!this.isLeaf(index)) {

            let leftChildIndex = this.leftChild(index),
                rightChildIndex = this.rightChild(index),

                largestIndex = index;

            if (this.items[leftChildIndex] > this.items[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (this.items[rightChildIndex] >= this.items[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex !== index) {
                this.swap(index, largestIndex);
                this.heapifyDown(largestIndex);
            }
        }
    }

    buildHeap(array) {
        this.items = array;
        for(let i = Math.floor(this.items.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

}
