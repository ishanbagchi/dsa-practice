# 🧠 Data Structures & Algorithms Practice

A collection of LeetCode problem solutions organized by data structure and algorithm patterns, implemented in JavaScript.

## 📁 Project Structure

```
dsa/
├── greedy/            # Greedy algorithm problems
├── hash-map/          # Hash Map & Hash Table problems
├── heap/              # Heap & Priority Queue problems
├── search/            # Search algorithm problems
├── sliding-window/    # Sliding Window technique problems
├── stack/             # Stack data structure problems
├── two-pointers/      # Two Pointers technique problems
└── README.md
```

## 🗂️ Problem Categories

### 🔍 Hash Map

Problems that utilize hash maps/hash tables for efficient lookups and storage.

| Problem                                                                    | Difficulty | LeetCode Link                                                     |
| -------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------- |
| [Two Sum](./hash-map/1-two-sum.js)                                         | Easy       | [#1](https://leetcode.com/problems/two-sum/)                      |
| [Top K Frequent Elements](./hash-map/347-top-k-frequent-elements.js)       | Medium     | [#347](https://leetcode.com/problems/top-k-frequent-elements/)    |
| [Time Based Key-Value Store](./hash-map/981-time-based-key-value-store.js) | Medium     | [#981](https://leetcode.com/problems/time-based-key-value-store/) |

**Key Concepts:**

-   O(1) average time complexity for lookups
-   Space-time tradeoffs
-   Complement pattern
-   Frequency counting
-   Bucket sort technique

---

### 🔍 Search

Problems using various search algorithms for efficient data retrieval.

| Problem                                                                                                                           | Difficulty | LeetCode Link                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| [Binary Search](./search/704-binary-search.js)                                                                                    | Easy       | [#704](https://leetcode.com/problems/binary-search/)                                           |
| [Maximum Count of Positive Integer and Negative Integer](./search/2529-maximum-count-of-positive-integer-and-negative-integer.js) | Easy       | [#2529](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/) |

---

### 💡 Greedy

Problems that use greedy algorithms, often with sorting or selection strategies.

| Problem                                         | Difficulty | LeetCode Link                                         |
| ----------------------------------------------- | ---------- | ----------------------------------------------------- |
| [Stone Game VI](./greedy/1686-stone-game-vi.js) | Medium     | [#1686](https://leetcode.com/problems/stone-game-vi/) |

**Key Concepts:**

-   Greedy choice property
-   Sorting for optimal selection
-   Local vs global optimum
-   Game theory

**Key Concepts:**

-   Binary search: O(log n) time complexity
-   Linear search: O(n) time complexity
-   Divide and conquer approach
-   Sorted array requirement (for binary search)
-   Search space reduction

---

### 🔄 Two Pointers

Problems solved using the two-pointer technique for efficient array/string traversal.

| Problem                                                         | Difficulty | LeetCode Link                                              |
| --------------------------------------------------------------- | ---------- | ---------------------------------------------------------- |
| [Valid Palindrome](./two-pointers/125-valid-palindrome.js)      | Easy       | [#125](https://leetcode.com/problems/valid-palindrome/)    |
| [Valid Palindrome II](./two-pointers/680-valid-palindrome-2.js) | Easy       | [#680](https://leetcode.com/problems/valid-palindrome-ii/) |

**Key Concepts:**

-   Left and right pointer convergence
-   Palindrome validation
-   Character filtering and normalization

---

### 📚 Stack

Problems that leverage the Last-In-First-Out (LIFO) property of stacks.

| Problem                                                                             | Difficulty | LeetCode Link                                                           |
| ----------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| [Evaluate Reverse Polish Notation](./stack/150-evaluate-reverse-polish-notation.js) | Medium     | [#150](https://leetcode.com/problems/evaluate-reverse-polish-notation/) |
| [Asteroid Collision](./stack/735-asteroid-collision.js)                             | Medium     | [#735](https://leetcode.com/problems/asteroid-collision/)               |

**Key Concepts:**

-   Expression evaluation
-   Collision simulation
-   Mathematical operations with proper precedence

---

### 🏔️ Heap

Problems utilizing heap data structures for priority-based operations.

| Problem                                                                       | Difficulty | LeetCode Link                                                          |
| ----------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| [Kth Largest Element in Array](./heap/215-kth-largest-element-in-an-array.js) | Medium     | [#215](https://leetcode.com/problems/kth-largest-element-in-an-array/) |

**Key Concepts:**

-   Max/Min heap implementation
-   Priority queue operations
-   Efficient kth element finding

---

### 🪟 Sliding Window

Problems using the sliding window technique for subarray/substring optimization.

| Problem                                                                            | Difficulty | LeetCode Link                                                        |
| ---------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------- |
| [Sliding Window Maximum](./sliding-window/239-sliding-window-maximum.js)           | Hard       | [#239](https://leetcode.com/problems/sliding-window-maximum/)        |
| [Find All Anagrams in String](./sliding-window/438-find-all-anagrams-in-string.js) | Medium     | [#438](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |

**Key Concepts:**

-   Fixed and variable window sizes
-   Deque for maximum/minimum tracking
-   Character frequency counting
-   Anagram detection

## 🎯 Problem Difficulty Distribution

-   **Easy**: 6 problems
-   **Medium**: 7 problems
-   **Hard**: 1 problem

## 🚀 How to Use

1. **Browse by Category**: Navigate to specific folders based on the algorithm pattern you want to practice
2. **Study Implementation**: Each file contains detailed comments explaining the approach
3. **Run Solutions**: Execute any JavaScript file using Node.js:
    ```bash
    node ./stack/150-evaluate-reverse-polish-notation.js
    ```

## 📚 Learning Resources

Each problem file includes:

-   Direct LeetCode problem link
-   YouTube video explanations (where available)
-   Data structure annotations
-   Time and space complexity insights

## 🛠️ Tech Stack

-   **Language**: JavaScript (ES6+)
-   **Runtime**: Node.js
-   **Data Structures**: Arrays, Objects, Maps, Sets, Custom Classes

## 📈 Progress Tracking

**Total Problems Solved**: 14

**By Category**:

-   Greedy: 1/∞
-   Hash Map: 3/∞
-   Search: 2/∞
-   Two Pointers: 2/∞
-   Stack: 2/∞
-   Heap: 1/∞
-   Sliding Window: 2/∞

## 🎓 Study Tips

1. **Pattern Recognition**: Focus on identifying which pattern applies to new problems
2. **Time Complexity**: Always analyze and optimize for better time complexity
3. **Edge Cases**: Consider boundary conditions and edge cases in your solutions
4. **Practice**: Solve similar problems to reinforce pattern understanding

## 🤝 Contributing

We welcome contributions! Whether you want to:

-   Add new problem solutions
-   Improve existing solutions
-   Fix bugs or enhance documentation
-   Suggest new categories

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📝 Notes

-   All solutions are optimized for readability and performance
-   Each file is self-contained with proper documentation
-   Solutions follow JavaScript best practices and conventions

---

**Happy Coding!** 🎉

_Last Updated: July 31, 2025_
