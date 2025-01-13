# TimeSpaceComplexities
This repo deals about demonstrating different time and space complexities in JavaScript
# Time Complexity Demonstration

## Project Overview
This project demonstrates various time complexities using JavaScript through examples that are both practical and easy to understand. Each example shows how the execution time grows with the input size.

## Time Complexities Covered
1. **O(1)** - Constant Time
2. **O(log n)** - Logarithmic Time
3. **O(n)** - Linear Time
4. **O(n log n)** - Linearithmic Time
5. **O(n^2)** - Quadratic Time
6. **O(2^n)** - Exponential Time

## How It Works
- The examples are implemented in a `TimeComplexity` class.
- Each method corresponds to a specific time complexity and illustrates a common real-world scenario.
- User input is prompted for dynamic demonstration.
- Results are logged to the console.


## Input Guidelines
- Enter a number as input when prompted. The number should be small (e.g., `0–10`) for higher complexities like `O(2^n)` to prevent excessive runtime.

## Example Output
For `n = 5`, you might see:
```plaintext
O(1): Constant Time Example Result: 10
O(log n): Logarithmic Time Example Result: 3
O(n): Linear Time Example Result: [0, 1, 2, 3, 4]
O(n log n): Linearithmic Time Example Result: 4
O(n^2): Quadratic Time Example Result: 25
O(2^n): Exponential Time Example Result: 8
```

---

# Space Complexity Demonstration

## Project Overview
This project demonstrates various space complexities using JavaScript. The examples showcase how memory usage increases with input size in different scenarios.

## Space Complexities Covered
1. **O(1)** - Constant Space
2. **O(log n)** - Logarithmic Space
3. **O(n)** - Linear Space
4. **O(n^2)** - Quadratic Space

## How It Works
- The examples are implemented in a `SpaceComplexity` class.
- Each method illustrates a specific space complexity with real-world examples.
- User input is prompted dynamically for demonstration.
- Results are logged to the console.


## Input Guidelines
- Input a number when prompted. Keep the input small (e.g., `0–10`) for higher complexities like `O(2^n)` or `O(n!)` to avoid high memory usage.

## Example Output
For `n = 3`, you might see:
```plaintext
O(1): Constant Space Example Result: 6
O(log n): Logarithmic Space Example Result: 6
O(n): Linear Space Example Result: [0, 1, 2]
O(n^2): Quadratic Space Example Result: [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

```

---


- **`TimeComplexity` / `SpaceComplexity` Classes**: Contains the methods demonstrating respective complexities.

### Limitations
- Large input sizes can cause runtime/memory issues for complexities like `O(2^n)` or `O(n!)`.


