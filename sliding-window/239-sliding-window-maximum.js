/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * https://www.youtube.com/watch?v=DfljaUwZsOk
 *
 * * DS - Deque
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
	if (k === 1) return nums

	const deque = [] // indexes
	const result = []
	let left = 0
	let right = 0

	while (right < nums.length) {
		// pop smaller values from deque
		while (deque.length && nums[deque[deque.length - 1]] < nums[right])
			deque.pop()
		deque.push(right)

		// remove left value from window
		if (left > deque[0]) deque.shift()

		if (right - left + 1 >= k) {
			result.push(nums[deque[0]])
			left++
		}

		right++
	}
	return result
}
