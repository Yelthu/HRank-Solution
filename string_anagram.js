function stringAnagram(dictionary, query) {
    // Create a map to store the count of sorted words in the dictionary
    const d = new Map();

    // Iterate over the dictionary, sort the letters of each word, and update the map
    dictionary.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        d.set(sortedWord, (d.get(sortedWord) || 0) + 1);
    });

    // Prepare an array to store the result for each query
    const ans = [];

    // Iterate over the query, sort each word, and check if it exists in the map
    query.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        ans.push(d.get(sortedWord) || 0);
    });

    return ans;
}

// Example usage:
const dictionary = ["listen", "silent", "enlist", "hello"];
const query = ["listen", "silent", "world"];

console.log(stringAnagram(dictionary, query));  // Example output: [3, 3, 0]