/**
 * https://leetcode.com/problems/stone-game-vi/
 * https://youtu.be/iEf6bWgqHZo?si=AbD0C8bfo9O7AbFI
 *
 * * DS - Greedy, Sorting
 *
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
	const arr = []
	for (let i = 0; i < aliceValues.length; i++) {
		arr.push([aliceValues[i] + bobValues[i], aliceValues[i], bobValues[i]])
	}
	arr.sort((a, b) => b[0] - a[0])
	let aliceScore = 0,
		bobScore = 0
	arr.forEach((a, idx) => {
		if (idx % 2 === 0) {
			aliceScore += a[1]
		} else {
			bobScore += a[2]
		}
	})
	if (aliceScore === bobScore) return 0
	return aliceScore > bobScore ? 1 : -1
}
