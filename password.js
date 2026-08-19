const rlsync = require("readline-sync");
const password = "1234";
const attempt1 = rlsync.question("Введите пароль: ");
if (attempt1 === password) console.log("Доступ разрешён");
else {
  const attempt2 = rlsync.question("Попробуйте ещё раз: ");
  if (attempt2 === password) console.log("Доступ разрешён");
  else {
    const attempt3 = rlsync.question("Попробуйте ещё раз: ");
    if (attempt3 === password) console.log("Доступ разрешён");
    else console.log("Доступ запрещён");
  }
}