const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

function calculateSumAndAverage(data) {
    let totalSum = 0;
    let count = 0;
    
    // Define first index for rows [i]
    for (let i = 0; i < data.length; i++) {
        // Define index for columns [j]
        for (let j = 0; j < data[i].length; j++) {
            totalSum += data[i][j];
            count++;
        }
    }
    
    // Calculate average
    const average = totalSum / count;
    
	// Define the return value
    return {
        sum: totalSum,
        average: average
    };
}

// Assign a repeatable value
const results = calculateSumAndAverage(msftData);

//Print results
console.log("The sum of all MSFT prices:", results.sum);
console.log("Average closing price of MSFT is: ", results.average);
