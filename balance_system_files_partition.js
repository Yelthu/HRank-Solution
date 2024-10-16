function mostBalancedPartition(parent, files_size) {
    const n = parent.length;
    const children = Array.from({ length: n }, () => []);

    // Build the children array based on the parent array
    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }

    const size_sums = new Array(n).fill(null);

    // Recursive function to calculate the size sums
    function size_sums_rec(i) {
        size_sums[i] = files_size[i] + children[i].reduce((acc, c) => acc + size_sums_rec(c), 0);
        return size_sums[i];
    }

    // Compute the total size sums starting from root (0)
    size_sums_rec(0);

    // Find the minimum difference by calculating the balance at each node
    return Math.min(...size_sums.slice(1).map(ss => Math.abs(size_sums[0] - 2 * ss)));
}

// Example usage:
const parent = [-1, 0, 0, 1, 1, 2];
const files_size = [1, 2, 2, 1, 1, 1];
console.log(mostBalancedPartition(parent, files_size)); // Output: 1