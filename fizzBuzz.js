
const fizzBuzz = (n) => {
    if(n % 3 == 0 && n % 5 == 0){
        return `FizzBuzz`
    }
    else if(n % 3 == 0){
        return `Fizz`;
    } 
    else if(n % 5 == 0){
        return `Buzz`;
    }
    else{
        return `${n} no es divisible entre 3 ni 5`;
    }

}

//console.log(fizzBuzz(8));

module.exports = fizzBuzz;