/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * https://youtu.be/YPTqKIgVk-k?si=2IkVJgrqSzOTD5Mo
 *
 * * DS - Map, Array (Buckets)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const count = new Map()
	const buckets = []
	nums.forEach((num) => {
		count.set(num, 1 + (count.get(num) ?? 0))
	})
	for (const [num, freq] of count) {
		buckets[freq] = buckets[freq] ?? []
		buckets[freq].push(num)
	}
	let result = []
	for (let i = buckets.length - 1; i >= 0; i--) {
		if (result.length === k) return result

		if (buckets[i] && buckets.length) {
			result = result.concat(buckets[i])
		}
	}
	return []
}
