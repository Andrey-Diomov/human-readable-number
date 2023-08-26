module.exports = function toReadable(number) {
    const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teenDigits = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensDigits = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return singleDigits[number];
    } else if (number > 10 && number < 20) {
        return teenDigits[number % 10];
    } else if (number < 100 && number % 10 == 0) {
        return tensDigits[number / 10];
    } else if (number > 20 && number < 100) {
        return tensDigits[Math.floor(number / 10)] + ' ' + singleDigits[number % 10];
    } else if (number % 100 == 0) {
        return singleDigits[number / 100] + ' hundred'
    } else if (number > 100 && number < 1000) {
        let hundred = Math.floor(number / 100);
        let tens = Math.floor((number % 100) / 10);
        let digit = number % 10;

        if (tens == 1 && digit != 0) { return singleDigits[hundred] + ' hundred ' + teenDigits[digit]; }
        if (tens == 0 && digit != 0) { return singleDigits[hundred] + ' hundred ' + singleDigits[digit]; }
        if (digit == 0) { return singleDigits[hundred] + ' hundred ' + tensDigits[tens]; }

        return singleDigits[hundred] + ' hundred ' + tensDigits[tens] + ' ' + singleDigits[digit];
    }
}