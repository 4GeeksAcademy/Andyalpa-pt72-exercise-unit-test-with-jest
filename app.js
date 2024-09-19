// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    const exchangeRateUSD = oneEuroIs["USD"];
    let valueInDollar = valueInEuro * exchangeRateUSD;
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) => {
    return (valueInDollar / 1.07) * oneEuroIs["JPY"];
  };

const fromYenToPound = (valueInYen) => {
    return (valueInYen / 156.5) * oneEuroIs["GBP"];
}

const euroAmount = 100; 
const dollarAmount = fromEuroToDollar(euroAmount);
const yenAmount = fromDollarToYen(dollarAmount);
const poundAmount = fromYenToPound(10000);

console.log(`${euroAmount} Euros is approximately ${dollarAmount} US Dollars.`);
console.log(`${dollarAmount} US Dollars is approximately ${yenAmount} Japanese Yen.`);
console.log(`${10000} Japanese Yen is approximately ${poundAmount} British Pounds.`);


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };