const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sumOfPrices = 0;

for (let i = 0; i < amdPrices.length; i++){
    sumOfPrices += amdPrices[i]
};

let avrPrice = (sumOfPrices/amdPrices.length);
console.log(avrPrice);
//to check if average price is working correctly

let countAboveAvr = 0;

for (let i = 0; i < amdPrices.length; i++){
    if (amdPrices[i] > avrPrice){
        countAboveAvr++
    }
};

console.log("Number of days AMD was above the 7-day SMA is: " + countAboveAvr);
//Define a var for 