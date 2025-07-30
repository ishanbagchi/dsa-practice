/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 * https://youtu.be/G8xtZy0fDKg
 *
 * * DS - Sliding Window
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
	if (p.length > s.length) return []

	const aCharCode = 'a'.charCodeAt(0)
	const pCount = Array(26).fill(0)
	const sCount = Array(26).fill(0)
	const res = []

	// Build initial counts
	for (let i = 0; i < p.length; i++) {
		pCount[p.charCodeAt(i) - aCharCode]++
		sCount[s.charCodeAt(i) - aCharCode]++
	}

	let matches = 0
	for (let i = 0; i < 26; i++) {
		if (pCount[i] === sCount[i]) matches++
	}

	// Slide the window
	for (let i = 0; i < s.length - p.length; i++) {
		if (matches === 26) res.push(i)

		const l = s.charCodeAt(i) - aCharCode
		const r = s.charCodeAt(i + p.length) - aCharCode

		// Remove the leftmost char from window
		sCount[l]--
		if (sCount[l] === pCount[l]) matches++
		else if (sCount[l] + 1 === pCount[l]) matches--

		// Add the new rightmost char to window
		sCount[r]++
		if (sCount[r] === pCount[r]) matches++
		else if (sCount[r] - 1 === pCount[r]) matches--
	}

	if (matches === 26) res.push(s.length - p.length)

	return res
}
