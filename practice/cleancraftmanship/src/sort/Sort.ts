export const sort = (list: Array<number>): Array<number> => {
    if (list.length <= 1) return list
    else {
        var middle = list[0]
        var middles = list.filter((x) => x == middle)
        var lessers = list.filter((x) => x < middle)
        var greaters = list.filter((x) => x > middle)
        var result = []
        result.push(...sort(lessers))
        result.push(...middles)
        result.push(...sort(greaters))
        return result
    }
}
