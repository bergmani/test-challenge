const dna = (string) => {
    const canonicalBase = ['C', 'T', 'A', 'G'];
    let newString = '';
    for(let i = 0; i < string.length; i ++) {
        if(canonicalBase.indexOf(string[i]) !== 0) {
            newString += string[i];
        }
    }
    return newString;
}
console.log(dna('CfsdTAGGGTA'));

module.exports = dna;