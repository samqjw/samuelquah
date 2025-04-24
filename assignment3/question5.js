const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

/*Application of 'if' followed by 'else if' then 'else', I did not use 'else' for 'bearish' and 'bullish' as there will be a conflicting argument*/
if ((bacData[3] > bacData[2]) && ((bacData[4] > 100000))) {
    console.log("Strong Bullish")
}
    else if ((bacData[3] > bacData[2]) && ((bacData[4] < 100000))) {
        console.log("Bullish")
    }

    else if ((bacData[3] < bacData[2]) && ((bacData[4] > 10000))) {
        console.log("Strong Bearish")
    }

    else if ((bacData[3] < bacData[2]) && ((bacData[4] < 10000))) {
        console.log("Bearish")
    }

    else if (bacData[3] === bacData[2]) {
        console.log("neutral")
    };