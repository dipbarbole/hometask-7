import { PriorityQueue } from "./PriorityQueue";

export class JobRunner {
    priorityQueue;
    constructor() {
        this.priorityQueue = new PriorityQueue();
    }

    setJob(job: any, priority: number) {
            this.priorityQueue.enqueue(job, priority);
    }

    run() {
        if (this.priorityQueue.isEmpty()) {
            return "No elements in Queue";
        }

        while (!this.priorityQueue.isEmpty()) {
            const item = this.priorityQueue.extractMax();
            item.run();
        }
    }

}
