const { default: expect } = require('expect');
const fizzBuzz = require('../fizzBuzz');

test('Un número divisible entre 5 y 3', () =>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
})