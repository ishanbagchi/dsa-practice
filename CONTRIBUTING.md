# 🤝 Contributing to DSA Practice

Thank you for your interest in contributing to this Data Structures & Algorithms practice repository! This guide will help you understand how to contribute effectively.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code Standards](#code-standards)
- [Problem Categories](#problem-categories)
- [File Naming Convention](#file-naming-convention)
- [Documentation Requirements](#documentation-requirements)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Git
- A GitHub account

### Fork and Clone
1. Fork this repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/dsa-practice.git
   cd dsa-practice
   ```
3. Add the original repository as upstream:
   ```bash
   git remote add upstream https://github.com/ishanbagchi/dsa-practice.git
   ```

## 🎯 How to Contribute

### Types of Contributions Welcome

1. **🆕 New Problem Solutions**
   - Add solutions to problems not yet in the repository
   - Ensure the problem fits into existing categories

2. **🔧 Improve Existing Solutions**
   - Optimize time/space complexity
   - Add alternative approaches
   - Fix bugs or improve readability

3. **📚 Documentation Improvements**
   - Enhance code comments
   - Update README.md
   - Add learning resources

4. **🗂️ New Categories**
   - Propose new algorithm pattern categories
   - Must include at least 2-3 problems

## 📝 Pull Request Guidelines

### Before Creating a PR

1. **Check for Duplicates**: Ensure the problem doesn't already exist
2. **Follow Naming Convention**: Use the format `{number}-{problem-name}.js`
3. **Test Your Solution**: Verify your code works correctly
4. **Update Documentation**: Add your problem to README.md

### PR Title Format
```
Add: [Problem Name] - LeetCode #{number}
```
**Examples:**
- `Add: Contains Duplicate - LeetCode #217`
- `Improve: Two Sum - Add O(n) solution`
- `Fix: Valid Parentheses - Handle edge case`

### PR Description Template

```markdown
## 📋 Problem Details
- **LeetCode Link**: [Problem URL]
- **Difficulty**: Easy/Medium/Hard
- **Category**: Hash Map/Two Pointers/Stack/etc.

## 🛠️ Solution Details
- **Time Complexity**: O(?)
- **Space Complexity**: O(?)
- **Approach**: Brief description of the algorithm

## ✅ Checklist
- [ ] Solution is tested and working
- [ ] Code follows project standards
- [ ] Added proper comments and documentation
- [ ] Updated README.md with new problem
- [ ] Placed file in correct category folder
- [ ] Followed naming convention

## 📝 Additional Notes
Any additional context or alternative approaches considered.
```

## 🎨 Code Standards

### JavaScript Style Guide

```javascript
/**
 * Problem URL and description
 * Video explanation URL (if available)
 *
 * * DS - [Data Structure/Algorithm Pattern]
 * * Time Complexity: O(?)
 * * Space Complexity: O(?)
 *
 * @param {type} paramName - description
 * @return {type} description
 */
const functionName = (params) => {
    // Clear, commented implementation
    // Explain complex logic
    
    return result;
};

// Test cases (optional but recommended)
// console.log(functionName(testInput)); // expected output
```

### Best Practices

1. **Clear Variable Names**: Use descriptive names
2. **Comments**: Explain complex logic and edge cases
3. **Modular Code**: Break down complex solutions into helper functions
4. **Error Handling**: Consider edge cases and constraints
5. **Consistent Formatting**: Use consistent indentation and spacing

## 🗂️ Problem Categories

### Current Categories
- **hash-map/**: Hash tables, maps, sets
- **two-pointers/**: Two pointer technique
- **stack/**: Stack-based problems
- **heap/**: Priority queues, heap operations
- **sliding-window/**: Sliding window technique

### Adding New Categories
If your problem doesn't fit existing categories:
1. Create a new folder with a descriptive name
2. Add at least 2-3 problems to justify the category
3. Update the README.md structure section
4. Explain the category in your PR description

## 📁 File Naming Convention

```
{leetcode-number}-{problem-name-kebab-case}.js
```

**Examples:**
- `217-contains-duplicate.js`
- `3-longest-substring-without-repeating-characters.js`
- `20-valid-parentheses.js`

## 📚 Documentation Requirements

### Problem File Header
Every solution file must include:
```javascript
/**
 * https://leetcode.com/problems/problem-name/
 * https://youtu.be/video-id (if available)
 *
 * * DS - [Primary Algorithm/Data Structure]
 * * Time: O(n) | Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
```

### README.md Updates
When adding a new problem, update the README.md:
1. Add entry to the appropriate category table
2. Update problem count in "Progress Tracking"
3. Update difficulty distribution if needed

## 🔍 Review Process

### What Reviewers Look For
1. **Correctness**: Does the solution work for all test cases?
2. **Efficiency**: Is this a reasonable time/space complexity?
3. **Readability**: Is the code clear and well-commented?
4. **Standards**: Does it follow the project conventions?
5. **Documentation**: Is the problem properly documented?

### Review Timeline
- Initial review within 48 hours
- Follow-up reviews within 24 hours
- Merging typically happens within a week for approved PRs

## 🐛 Reporting Issues

### Bug Reports
Use this template for bug reports:
```markdown
**Problem**: Brief description
**Expected**: What should happen
**Actual**: What actually happens
**Steps**: How to reproduce
**File**: Which file has the issue
```

### Feature Requests
```markdown
**Feature**: What you'd like to see
**Use Case**: Why it would be helpful
**Implementation**: Any ideas on how to implement
```

## 🎉 Recognition

Contributors will be:
- Added to a contributors section (coming soon)
- Mentioned in release notes for significant contributions
- Given credit in problem file comments where applicable

## 📞 Questions?

- Open an issue for questions about contributing
- Check existing issues and PRs before asking
- Be respectful and constructive in all interactions

---

**Thank you for contributing to making this a better learning resource for everyone!** 🙏

*Happy Coding!* 🚀
