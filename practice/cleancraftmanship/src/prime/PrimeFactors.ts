export function factorsOf(n: number): Array<number> {
    var factors: Array<number> = []
    for (var divisor = 2; n > 1; divisor++) {
        for (; n % divisor == 0; n /= divisor) {
            factors.push(divisor)
        }
    }

    return factors
}
