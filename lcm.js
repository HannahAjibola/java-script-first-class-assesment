let number1 = 3
let number2 = 9

let max = number1 > number2 ? number1 : number2;

while(true){
    if(max % number1 === 0 && max % number2 === 0){
        console.log("Lcm of", number1, "and", number2, "is:", max);
        break;
    }
    max++;
}
