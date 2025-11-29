numbers = [15, 4, 27, 2, 32, 71, 2, 100]

let highest = numbers[0]
let secondlowest = 0;

for(let count = 0; count < numbers.length; count++){
    if (highest < numbers[count]){
    highest = numbers[count]
    }
}
for (let countTwo = 0;countTwo < numbers.length;countTwo++){
    if (numbers [countTwo] > secondlowest && numbers[countTwo] != highest){
    secondlowest = numbers[countTwo]

    }
}
    console.log("The first largest is:" + highest)
    console.log("The first largest is:" + secondlowest)
