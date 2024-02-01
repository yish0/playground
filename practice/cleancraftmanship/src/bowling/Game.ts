export class Game {
    private rolls: number[] = []

    private currentRoll: number = 0

    public roll(pins: number): void {
        this.rolls[this.currentRoll++] = pins
    }

    public getScore(): number {
        var score: number = 0
        var i = 0
        var frameIndex = 0
        for (var frame: number = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) {
                score += 10 + this.strikeBonus(frameIndex)
                frameIndex++
            } else if (this.isSpare(frameIndex)) {
                // spare
                score += 10 + this.spareBonus(frameIndex)
                frameIndex += 2
            } else {
                score += this.twoBallsInFrame(frameIndex)
                frameIndex += 2
            }
        }
        return score
    }

    private isSpare(frameIndex: number): boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10
    }

    private isStrike(frameIndex: number): boolean {
        return this.rolls[frameIndex] == 10
    }

    private strikeBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
    }

    private spareBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 2]
    }

    private twoBallsInFrame(frameIndex: number): number {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
    }
}
