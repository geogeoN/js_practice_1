function passwordValidator(password) {
  let capitals = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let special = "!@#$%^&*";
  let digits = "0123456789";
  let [flagC, flagS, flagD] = [false, false, false];
  for (let char of password) {
    if (capitals.includes(char)) flagC = true;
    if (special.includes(char)) flagS = true;
    if (digits.includes(char)) flagD = true;
    if (flagC && flagS && flagD) break;
  }
  console.log(
    6 <= password.length && password.length <= 20 && flagC && flagS && flagD
      ? "Пароль надёжный"
      : "Пароль слабый",
  );
}