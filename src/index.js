module.exports = function toReadable(number) {
    let numStr = number.toString();

    let unit = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    }

    let tens = {
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }

    let decade = {
        '1': 'ten',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }

    switch (numStr.length) {
        case 1:
            return (numStr[0] === '0') ? 'zero' : unit[numStr];
            break;

        case 2:
            if (numStr[1] === '0') {
                return decade[numStr[0]]
            } else if (numStr[0] === '1') {
                return tens[numStr];
            } else {
                return `${decade[numStr[0]]} ${unit[numStr[1]]}`;
            }
            break;

        case 3:
            if (numStr[1] === '0' && numStr[2] === '0') {
                return `${unit[numStr[0]]} hundred`;
            };
            if (numStr[1] === '0') {
                return `${unit[numStr[0]]} hundred ${unit[numStr[2]]}`;
            };
            if (numStr[2] === '0') {
                return `${unit[numStr[0]]} hundred ${decade[numStr[1]]}`;
            }
            if (numStr[1] === '1') {
                return `${unit[numStr[0]]} hundred ${tens[numStr.slice(1)]}`;
            }
            else {
                return `${unit[numStr[0]]} hundred ${decade[numStr[1]]} ${unit[numStr[2]]}`;
            }
            break;
    }
}
