function possibleChanges(usernames) {
    const ans = [];

    // Iterate over each username in the list
    usernames.forEach(u => {
        if (u.length <= 1) {
            ans.push("NO");
            return;
        }

        // Check if there is any lexicographical smaller character ahead
        let canChange = false;
        for (let i = 0; i < u.length - 1; i++) {
            if (u[i] > u[i + 1]) {
                canChange = true;
                break;
            }
        }

        // Append "YES" if a change is possible, otherwise "NO"
        ans.push(canChange ? "YES" : "NO");
    });

    return ans;
}

// Example usage:
console.log(possibleChanges(["abc", "cba", "xy"])); // Output: ["NO", "YES", "NO"]