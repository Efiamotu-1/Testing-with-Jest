const {stringLength, capitalize, reverseString, Calculator} = require('./index')

// test('length of string', () => {
//     expect(stringLength('culture')).toBe(7)
// })

test('is string greater than 1 but less than 10', () => {
    expect(stringLength('cane')).toBe(true)
})

test('reverse a string', () => {
    expect(reverseString('spelling')).toBe('gnilleps')
})

describe('Add numbers', () => {
    test('2 + 2', () => { 
        const calculator = new Calculator(2, 2)
        expect(calculator.add()).toBe(4)
     })

     test('1001 + 2000', () => {
        const calculator = new Calculator(1001, 2000)
        expect(calculator.add()).toBe(3001)
    })

    test('123456789 + 987654321', () => {
        const calculator = new Calculator(123456789, 987654321)
        expect(calculator.add()).toBe(1111111110)
    })
})

describe('Subtract numbers', () => {
    test('20 - 10', () => { 
        const calculator = new Calculator(20, 10)
        expect(calculator.subtract()).toBe(10)
     })

     test('10 - 5', () => {
        const calculator = new Calculator(10, 5)
        expect(calculator.subtract()).toBe(5)
    })

    test('10 - 20', () => {
        const calculator = new Calculator(10, 20)
        expect(calculator.subtract()).toBe(-10)
    })

})

describe('Divide numbers', () => {
    test('20 / 10', () => { 
        const calculator = new Calculator(20, 10)
        expect(calculator.divide()).toBe(2)
     })

     test('10 / 5', () => {
        const calculator = new Calculator(10, 5)
        expect(calculator.divide()).toBe(2)
    })

    test('5000 / 2', () => {
        const calculator = new Calculator(5000, 2)
        expect(calculator.divide()).toBe(2500)
    })
})

describe('Multiply numbers', () => {
     test('10 * 2', () => {
        const calculator = new Calculator(10, 2)
        expect(calculator.multiply()).toBe(20)
    })

    test('50 * 2', () => {
        const calculator = new Calculator(50, 2)
        expect(calculator.multiply()).toBe(100)
    })

    test('1000 * 8', () => {
        const calculator = new Calculator(1000, 8)
        expect(calculator.multiply()).toBe(8000)
    })
})


test('capitalise the first character of the string', () => {
    expect(capitalize(1)).toBe('not a string')
})