let num = 10;
let factor = 1;

for(let number = 2; number <= num; number++){
    factor *= number; 
console.log(factor)
}
let sum = 0, temp = num;
    while (temp > 0){
        let digit = temp % 0;
        sum  += digitFactorial(digit);
        temp = Math.floor(temp / 10);
    }
        let total = sum === num;
    console.log(total)
