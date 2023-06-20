const { default: expect } = require('expect');
const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(1,2)).toBe(3);
});

test('substracts a - b', () => {
    expect(calculator.substract(10,1)).toBe(9);
});

test('multiplies a * b', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});

test('divides a / b', () => {
    expect(calculator.divide(9,2)).toBe(4.5);
});

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,3)).toBe(8);
});
