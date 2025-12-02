console.log("Perfect numbers between 1 and 1000:");

for (let num = 1; num <= 1000; num++) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log(num);
    }
}

