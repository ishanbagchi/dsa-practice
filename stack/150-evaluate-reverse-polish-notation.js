/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * https://youtu.be/iu0082c4HDE
 *
 * * DS - Stack
 *
 * @param {string[]} tokens
 * @return {number}
 */
const operateNumbers = (second, first, op) => {
	const n1 = Number(first)
	const n2 = Number(second)
	switch (op) {
		case '+':
			return n1 + n2
		case '-':
			return n1 - n2
		case '/':
			return n1 / n2 > 0 ? Math.floor(n1 / n2) : Math.ceil(n1 / n2)
		case '*':
			return n1 * n2
	}
	return 0
}

const isNumeric = (str) => !isNaN(str)

var evalRPN = function (tokens) {
	const stack = []
	tokens.forEach((token) => {
		stack.push(
			isNumeric(token)
				? token
				: operateNumbers(stack.pop(), stack.pop(), token).toString(),
		)
	})
	return Number(stack.pop())
}
