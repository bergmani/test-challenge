const { default: expect } = require('expect');
const factorial = require('../factorial.js');

test('El factorial de n número', () => {
    expect(factorial(5)).toBe(120);
})
