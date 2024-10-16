function findSum(numbers, queries) {
    // Initialize cumulative sum arrays
    let a = [0];
    let b = [0];

    // Fill the cumulative sum array 'a' and the count of zeros array 'b'
    numbers.forEach((x) => {
        a.push(a[a.length - 1] + x);
        b.push(b[b.length - 1] + (x === 0 ? 1 : 0));
    });

    // Process each query and compute the result
    return queries.map(([l, r, x]) => {
        return a[r] - a[l - 1] + x * (b[r] - b[l - 1]);
    });
}

// Example usage:
let numbers = [1, 0, 3, 0, 5];
let queries = [
    [1, 3, 2],
    [2, 5, 1]
];

console.log(findSum(numbers, queries));  // Example output