const { default: expect } = require('expect');
const DNA = require('../dna');

test('Tomar un string de ADN y otro que haga par', () => {
    expect(DNA("ATGTGCC")).toBe("TACACGG");
    //
})
