// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]



function findLowestPrices(prices, n) {
    
    let lowestPrices = [];
    for (let i = 0; i < n && i < prices.length; i++) {
        lowestPrices.push(prices[i]);
    }
    
    let sum = 0;
    for (let i = 0; i < lowestPrices.length; i++) {
        sum += lowestPrices[i];
    }
        
    return {
        lowestPrices: lowestPrices,
    };
}

const result = findLowestPrices(amdPrices, 3);

console.log("The 3 lowest prices are:", result.lowestPrices);