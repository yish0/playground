import { test, expect } from "bun:test"
import { factorsOf } from "./PrimeFactors"

test("factors()", () => {
    expect(factorsOf(1)).toBeEmpty()
    expect(factorsOf(2)).toContain(2)
    expect(factorsOf(3)).toContain(3)
    expect(factorsOf(4)).toEqual(expect.arrayContaining([2, 2]))
    expect(factorsOf(5)).toContain(5)
    expect(factorsOf(6)).toEqual(expect.arrayContaining([2, 3]))
    expect(factorsOf(7)).toContain(7)
    expect(factorsOf(8)).toEqual(expect.arrayContaining([2, 2, 2]))
    expect(factorsOf(9)).toEqual(expect.arrayContaining([3, 3]))
})
