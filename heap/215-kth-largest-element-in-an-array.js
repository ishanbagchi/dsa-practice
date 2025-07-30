/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * * DS - Max Heap
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MaxHeap {
	constructor() {
		this.heap = []
	}
	insert(val) {
		this.heap.push(val)
		this._bubbleUp()
	}
	extractMax() {
		if (this.heap.length === 1) return this.heap.pop()
		const max = this.heap[0]
		this.heap[0] = this.heap.pop()
		this._bubbleDown()
		return max
	}
	_bubbleUp() {
		let idx = this.heap.length - 1
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			if (this.heap[parentIdx] >= this.heap[idx]) break
			;[this.heap[parentIdx], this.heap[idx]] = [
				this.heap[idx],
				this.heap[parentIdx],
			]
			idx = parentIdx
		}
	}
	_bubbleDown() {
		let idx = 0
		const length = this.heap.length
		while (true) {
			let left = 2 * idx + 1
			let right = 2 * idx + 2
			let largest = idx
			if (left < length && this.heap[left] > this.heap[largest])
				largest = left
			if (right < length && this.heap[right] > this.heap[largest])
				largest = right
			if (largest === idx) break
			;[this.heap[largest], this.heap[idx]] = [
				this.heap[idx],
				this.heap[largest],
			]
			idx = largest
		}
	}
}

const findKthLargest = (nums, k) => {
	const maxHeap = new MaxHeap()
	for (let num of nums) {
		maxHeap.insert(num)
	}
	let result
	for (let i = 0; i < k; i++) {
		result = maxHeap.extractMax()
	}
	return result
}
