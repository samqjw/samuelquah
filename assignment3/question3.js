const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

const disneyDataCalc = parseFloat(disneyData["open"]) - parseFloat(disneyData["high"]) + parseFloat(disneyData["low"]) - parseFloat(disneyData["close"]);

const disneyDataCalcFloat = disneyDataCalc.toFixed(2);

console.log(disneyDataCalcFloat);