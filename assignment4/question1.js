const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let maxPrice = amdPrices[0];

for (let i = 0; i < amdPrices.length; i++){
    if (amdPrices[i] > maxPrice){
        maxPrice = amdPrices[i]
    }
};

console.log ("AMD 52-week high is " + maxPrice);