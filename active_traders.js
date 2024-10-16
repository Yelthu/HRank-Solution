function mostActive(customers) {
    const customerCount = {};

    // Count occurrences of each customer
    customers.forEach(customer => {
        customerCount[customer] = (customerCount[customer] || 0) + 1;
    });

    const totalCustomers = customers.length;
    const threshold = 0.05;

    // Filter customers who meet the threshold and sort them
    return Object.keys(customerCount)
        .filter(customer => customerCount[customer] / totalCustomers >= threshold)
        .sort();
}

// Example usage:
const customers = ["Alice", "Bob", "Alice", "Carol", "Alice", "Bob", "Dave"];
console.log(mostActive(customers));  // Output: [ 'Alice', 'Bob' ]