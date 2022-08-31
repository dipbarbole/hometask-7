export class QElement {
    private element: any;
    priority: number;
    constructor(element: any, priority: number)
    {
        this.element = element;
        this.priority = priority;
    }

    run() {
        this.element();
        console.log(`run job with priority ${this.priority}`);
    }
}
