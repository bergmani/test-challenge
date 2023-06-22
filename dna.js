
function DNA(string){
    if(string.includes('A','T','G','C')){
        let pairs = {
            "A": "T",
            "T": "A",
            "G": "C",
            "C": "G"
            }
            return string.replace(/A|T|G|C/g, function(matched){
                return pairs[matched];
            });
    } else {
        return ``
    }

}
// console.log(DNA('CTAGGGTA'));

module.exports = DNA;