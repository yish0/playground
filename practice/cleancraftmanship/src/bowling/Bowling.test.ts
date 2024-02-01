import { test, expect } from "bun:test"
import { Game } from "./Game"

var g: Game = new Game()

function setUp() {
    g = new Game()
}

function rollMany(n: number, pins: number) {
    for (var i: number = 0; i < n; i++) {
        g.roll(pins)
    }
}

function rollSpare() {
    rollMany(2, 5)
}

function rollStrike() {
    g.roll(10)
}

test("can create game", () => {
    var g: Game = new Game()
})

test("gutter game", () => {
    setUp()
    rollMany(20, 0)
    expect(g.getScore()).toBe(0)
})

test("all ones", () => {
    setUp()
    rollMany(20, 1)
    expect(g.getScore()).toBe(20)
})

test("one spare", () => {
    setUp()
    rollSpare()
    g.roll(7)
    rollMany(17, 0)
    expect(g.getScore()).toBe(24)
})

test("one strike", () => {
    setUp()
    rollStrike()
    g.roll(2)
    g.roll(3)
    rollMany(16, 0)
    expect(g.getScore()).toBe(20)
})

test("perfect game", () => {
    setUp()
    rollMany(12, 10)
    expect(g.getScore()).toBe(300)
})
