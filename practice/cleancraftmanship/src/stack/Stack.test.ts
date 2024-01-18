import { test, expect } from "bun:test"
import { Stack } from "./Stack"
import { UnderFlowError } from "./errors"

test("canCreateStack", () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBeTrue()
})

test("canPush", () => {
    const stack = new Stack()
    stack.push(0)
    expect(stack.isEmpty()).toBeFalse()
})

test("after one push is not empty", () => {
    const stack = new Stack()
    stack.push(0)
    expect(stack.isEmpty()).toBeFalse()
    expect(stack.size).toBe(1)
})

test("after one push and one pop is empty", () => {
    const stack = new Stack()
    stack.push(0)
    stack.pop()
    expect(stack.isEmpty()).toBeTrue()
    expect(stack.size).toBe(0)
})

test("after two pushes size is 2", () => {
    const stack = new Stack()
    stack.push(0)
    stack.push(0)
    expect(stack.size).toBe(2)
})

test("popping empty stack throws underflow", () => {
    const stack = new Stack()
    expect(() => {
        stack.pop()
    }).toThrow(new UnderFlowError())
})

test("after pushing x will pop x", () => {
    const stack = new Stack()
    stack.push(99)
    expect(stack.pop()).toBe(99)

    stack.push(88)
    expect(stack.pop()).toBe(88)
})

test("after pushing X and Y will pop Y then X", () => {
    const stack = new Stack()
    stack.push(99)
    stack.push(88)
    expect(stack.pop()).toBe(88)
    expect(stack.pop()).toBe(99)
})
