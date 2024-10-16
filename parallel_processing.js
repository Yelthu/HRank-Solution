function minTime(files, numCores, limit) {
    let divisibleFiles = [];
    let nonDivisibleFiles = [];

    // Separate files that can be processed by numCores from those that can't
    files.forEach(f => {
        if (f % numCores === 0) {
            divisibleFiles.push(f);
        } else {
            nonDivisibleFiles.push(f);
        }
    });

    // Sort divisible files in descending order
    divisibleFiles.sort((a, b) => b - a);

    // Calculate the time
    const processedByCores = divisibleFiles.slice(0, limit).reduce((acc, val) => acc + (val / numCores), 0);
    const remainingDivisibleFiles = divisibleFiles.slice(limit).reduce((acc, val) => acc + val, 0);
    const totalNonDivisibleFiles = nonDivisibleFiles.reduce((acc, val) => acc + val, 0);

    // Return the total minimum time
    return Math.floor(processedByCores + remainingDivisibleFiles + totalNonDivisibleFiles);
}

// Example usage:
const files = [10, 15, 20, 30];
const numCores = 2;
const limit = 2;

console.log(minTime(files, numCores, limit));  // Example output