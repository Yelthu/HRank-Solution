function nearlySimilarRectangles(sides) {
    // Helper function to calculate GCD of two numbers
    const gcd = (a, b) => {
        while (b > 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Dictionary to store the normalized width-to-height ratios
    const ratioMap = new Map();

    // Iterate over each rectangle in the sides array
    sides.forEach(([w, h]) => {
        const z = gcd(w, h);  // Calculate GCD of width and height
        const ratio = `${w / z},${h / z}`;  // Create a string to represent the normalized ratio

        // Increment the count for the ratio in the map
        if (ratioMap.has(ratio)) {
            ratioMap.set(ratio, ratioMap.get(ratio) + 1);
        } else {
            ratioMap.set(ratio, 1);
        }
    });

    // Calculate the number of nearly similar rectangles
    let result = 0;
    ratioMap.forEach(count => {
        result += (count * (count - 1)) / 2;  // Using combination formula to calculate the pairs
    });

    return result;
}

// Example usage:
const sides = [
    [4, 8],
    [15, 30],
    [25, 50]
];

console.log(nearlySimilarRectangles(sides));  // Example output: 3