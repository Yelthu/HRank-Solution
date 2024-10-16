function filledOrders(order, k) {
    // Sort the orders in ascending order
    order.sort((a, b) => a - b);

    let ans = 0;

    // Loop through each order
    for (let i = 0; i < order.length; i++) {
        // If the current order can be fulfilled
        if (order[i] <= k) {
            ans += 1;   // Increment the count of fulfilled orders
            k -= order[i];  // Deduct the order from available stock
        } else {
            break;  // Stop when the current order can't be fulfilled
        }
    }

    return ans;  // Return the total number of fulfilled orders
}

// Example usage:
console.log(filledOrders([10, 30, 20, 40], 60));  // Output: 2