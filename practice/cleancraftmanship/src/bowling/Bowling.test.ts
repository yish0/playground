import { test, expect } from "bun:test"
import { Game } from "./Game"

var g: Game = new Game()

test("nothing", () => {})

test("can create game", () => {
    var g: Game = new Game()
})

test("can roll", () => {
    expect(() => {
        var g: Game = new Game()
        g.roll(0)
    }).toThrow(Error)
})
