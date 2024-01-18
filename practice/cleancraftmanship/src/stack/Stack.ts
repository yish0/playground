import { UnderFlowError } from "./errors"

export class Stack {
    private empty: boolean = true
    private _size: number = 0
    private elements: Array<number> = []

    public isEmpty(): boolean {
        return this.empty
    }

    public push(element: number) {
        this.empty = false
        this.elements[this._size++] = element
    }

    public pop(): number {
        if (this._size == 0) throw new UnderFlowError()

        this.empty = true

        return this.elements[--this._size]
    }

    get size(): number {
        return this._size
    }
}
