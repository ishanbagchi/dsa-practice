/**
 * https://leetcode.com/problems/asteroid-collision/
 *
 * * DS - Stack
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
	const stack = []
	for (let i = 0; i < asteroids.length; i++) {
		const last = stack[stack.length - 1]
		const current = asteroids[i]
		if (!stack.length || last < 0 || current > 0) {
			stack.push(current)
		} else if (-current == last) {
			stack.pop()
		} else if (-current > last) {
			stack.pop()
			i--
		}
	}
	return stack
}
