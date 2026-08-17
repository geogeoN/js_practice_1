function symbol(c) {
    if ('0123456789'.includes(c)) console.log('Цифра');
    else if ('qwertyuiopasdfghjklzxcvbnm'.includes(c)) console.log('Буква');
    else console.log('Неизвестный символ');
}