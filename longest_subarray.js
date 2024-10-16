function longestSubarray(arr) {
    let n = arr.length;
    let ans = 0;

    // O(n^2) loop to find the longest subarray
    for (let i = 0; i < n; i++) {
        let w = [];
        let cnt = 0;

        for (let j = i; j < n; j++) {
            if (w.includes(arr[j])) {
                cnt++;
                continue;
            }

            if (w.length === 0) {
                w.push(arr[j]);
            } else if (w.length === 1) {
                if (Math.abs(w[0] - arr[j]) > 1) {
                    break;
                } else {
                    w.push(arr[j]);
                }
            } else {
                break;
            }

            cnt++;
        }

        ans = Math.max(ans, cnt);
    }

    return ans;
}

// Example usage:
console.log(longestSubarray([1, 2, 2, 3, 1, 2])); // Output: 4