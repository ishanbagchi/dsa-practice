/**
 * http://leetcode.com/problems/valid-palindrome/description/
 *
 * * DS - Two Pointers
 *
 * @param {string} s
 * @return {boolean}
 */
const isAlphanumeric = (char) => {
	return (
		(char >= 'a' && char <= 'z') ||
		(char >= 'A' && char <= 'Z') ||
		(char >= '0' && char <= '9')
	)
}

var isPalindrome = function (s) {
	let leftIndex = 0
	let rightIndex = s.length - 1

	while (leftIndex < rightIndex) {
		if (!isAlphanumeric(s[leftIndex])) {
			leftIndex++
			continue
		} else if (!isAlphanumeric(s[rightIndex])) {
			rightIndex--
			continue
		}
		if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
			return false
		}
		leftIndex++
		rightIndex--
	}
	return true
}

var isPalindromeBetterSolution = function (s) {
	const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
	return cleaned === cleaned.split('').reverse().join('')
}
