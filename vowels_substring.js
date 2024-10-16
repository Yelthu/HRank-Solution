function findSubstring(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Function to check if a character is a vowel
    const isVowel = (char) => vowels.includes(char);

    // Initialize the current and best vowel count in the first 'k' characters
    let cur = 0;
    for (let i = 0; i < k; i++) {
        cur += isVowel(s[i]) ? 1 : 0;
    }

    let best = cur;
    let ans = 0;

    // Slide through the string, adjusting vowel count
    for (let i = k; i < s.length; i++) {
        cur += isVowel(s[i]) ? 1 : 0;        // Add the new character
        cur -= isVowel(s[i - k]) ? 1 : 0;    // Remove the character that goes out of the window

        // Update best result if we find more vowels
        if (cur > best) {
            best = cur;
            ans = i - k + 1;
        }
    }

    // Return the best substring if we found any vowels
    return best > 0 ? s.slice(ans, ans + k) : "Not found!";
}

// Example usage:
console.log(findSubstring("qwdftr", 2));   // Outputs: "Not found!"
console.log(findSubstring("azerdii", 5)); // Outputs: "erdii"