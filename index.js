

function stringLength(string) {
    const length =  string.length;
    
    if(length >= 1 && length <= 10) {
        return true
    }
    else {
        return false
    }
}

function reverseString(string) {
    return string.split('').reverse().join('')
}


class Calculator {
    constructor(number1, number2) {
        this.number1 = number1
        this.number2 = number2
    }

    add() {
        return this.number1 + this.number2
    }

    subtract() {
        return this.number1 - this.number2
    }

    divide() {
        return this.number1 / this.number2
    }

    multiply() {
        return this.number1 * this.number2
    }
}

function capitalize(string) {
    let capitalized = ''
for(let i = 0; i < string.length; i++) {
    if(i === 0) {
        capitalized += string[i].toUpperCase()
    }
    else {
        capitalized += string[i]
    }
}
return capitalized
}

module.exports = {stringLength, capitalize, reverseString, Calculator} 
