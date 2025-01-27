const passBox = document.getElementById("password");
const passLength = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*-";

const allChars = upperCase + lowerCase + number + symbols;
function createPass() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (passLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passBox.value = password;
}

function copyPass() {
  passBox.select();
  document.execCommand("copy");
}
