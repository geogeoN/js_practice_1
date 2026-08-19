const rlsync = require('readline-sync');
const q = ['Столица Франции?', '2 + 2?', 'Цвет неба?'];
const a = ['Париж', '4', 'голубой'];
let counter = 0;
for (let i = 0; i < 3; i++) {
    const answer = rlsync.question(`${q[i]} `);
    if (answer.toLowerCase() === a[i].toLowerCase()) counter++;
}
console.log(`Вы набрали ${counter} из 3`);