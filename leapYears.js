console.log("Leap years between 1900 and 2025:");

let leapCount = 0;

for (let year = 1900; year <= 2025; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
        leapCount++;
    }
}
