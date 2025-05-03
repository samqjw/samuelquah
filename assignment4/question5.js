const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

// Function to calculate the average close price
function calculateAverageClose(data) {
    let totalClose = 0;
    let count = 0;
    
    // Create let function to loop through data
    for (let i = 0; i < data.length; i++) {
        // Convert the close price from string to number with parseFloat
		// Add the sum to totalClose
		// count++ here to calculate the number to divide.
        totalClose += parseFloat(data[i].close);
        count++;
    }
    
    // Calculate the average
    const averageClose = totalClose / count;
    
    return averageClose;
}

// Calculate and display the average close price
const averageClosePrice = calculateAverageClose(disneyData);
console.log("The average closing price is:", averageClosePrice);