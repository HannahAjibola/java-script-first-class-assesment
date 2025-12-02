let number1 = 48;
let number2 = 48;

let tempA = number1;
let tempB = number2;

while (tempB !== 0) {
    let temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
}

console.log("GCD of", number1, "and", number2, "is:", tempA);
