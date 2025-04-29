const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

/*Conversion of the strings to number with 'parseFloat' and assigned them to a new object 'disneyDataNo'*/
const disneyDataNo = {
	open: parseFloat(disneyData['open']),
	high: parseFloat(disneyData['high']),
	low: parseFloat(disneyData['low']),
	close: parseFloat(disneyData['close']),
	volume: parseFloat(disneyData['volume'])
};

/*Application of 'if' followed by 'else if', I did not use 'else' for 'bearish' and 'bullish' as there will be a conflicting argument*/
if (disneyDataNo['close'] > disneyDataNo['open'] && disneyDataNo['volume'] > 100000){
	console.log('Strong Bullish')
}
	else if (disneyDataNo['close'] > disneyDataNo['open'] && disneyDataNo['volume'] < 100000) {
		console.log('Bullish')
	}

	else if (disneyDataNo['close'] < disneyDataNo['open'] && disneyDataNo['volume'] > 10000){
		console.log('Strong Bearish')
	}
	
	else if (disneyDataNo['close'] < disneyDataNo['open'] && disneyDataNo['volume'] < 10000) {
		console.log('Bearish')
	}

	else if (disneyDataNo['close'] === disneyDataNo['open']) {
		console.log('Neutral')
	};

