function sumOfDigits(n) {
    const digits = String(n).split('').map(Number);
    let sum = 0;
    for (let digit of digits) {
        sum += digit;
    }
    console.log(sum);
}