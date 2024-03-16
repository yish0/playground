import { test, expect } from "bun:test"
import { sort } from "./Sort"

test("testSort", () => {
    expect(sort([])).toEqual([])
    expect(sort([1])).toEqual([1])
    expect(sort([1, 2])).toEqual([1, 2])
    expect(sort([1, 2, 3])).toEqual([1, 2, 3])
    expect(sort([2, 1, 3])).toEqual([1, 2, 3])
    expect(sort([1, 3, 2])).toEqual([1, 2, 3])
    expect(sort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(sort([2, 1, 3, 4])).toEqual([1, 2, 3, 4])
    expect(sort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
    expect(sort([1, 3, 1, 2])).toEqual([1, 1, 2, 3])
    expect(sort([1, 2])).toEqual([2, 1])
})
