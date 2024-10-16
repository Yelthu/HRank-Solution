function decryptPassword(s) {
    // Convert string to an array to manipulate characters
    let arr = s.split('');

    // Step 1: Find the first index where digits end (not including '0')
    let i = 0;
    while (i < arr.length && !isNaN(arr[i]) && arr[i] !== '0') {
        i++;
    }

    // Step 2: Replace '0's with the preceding digits
    let digitIndex = i - 1;  // Points to the last digit before letters start
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === '0') {
            arr[j] = arr[digitIndex--];  // Replace '0' with digit from front
        }
    }

    // Step 3: Swap adjacent letters if '*' is found
    for (let j = i; j < arr.length; j++) {
        if (arr[j] === '*') {
            // Swap the two characters before '*'
            let temp = arr[j - 1];
            arr[j - 1] = arr[j - 2];
            arr[j - 2] = temp;
        }
    }

    // Step 4: Join the array and remove any remaining '*'
    return arr.slice(i).join('').replace(/\*/g, '');
}

// Example usage:
const encrypted = "51Pa*0Lp*0e";
const decrypted = decryptPassword(encrypted);
console.log(decrypted);  // Outputs: "aP1pL5e"