function getMinCost(crew_id, job_id) {
    // Sort both arrays
    crew_id.sort((a, b) => a - b);
    job_id.sort((a, b) => a - b);

    // Calculate the sum of absolute differences
    let totalCost = 0;
    for (let i = 0; i < crew_id.length; i++) {
        totalCost += Math.abs(crew_id[i] - job_id[i]);
    }

    return totalCost;
}

// Example usage:
const crew_id = [5, 3, 1];
const job_id = [10, 2, 4];

console.log(getMinCost(crew_id, job_id));