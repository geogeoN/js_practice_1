const rlsync = require('readline-sync');
const number = 1 + Math.floor(Math.random() * 50);
let prevNumber;
for (let i = 0; i < 7; i++) {
    let newNumber = Number(rlsync.question('Введите число: '));
    if (newNumber === number) {
        console.log('Вы угадали!');
        break;
    }
    else {
        if (i !== 0) {
            if (Math.abs(number - newNumber) < Math.abs(number - prevNumber)) console.log('Ближе');
            else console.log('Дальше');
        }
        if (number > newNumber) console.log('Больше');
        else console.log('Меньше');
        prevNumber = newNumber;
    }    
}