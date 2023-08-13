const passwordLengthCondition = document.getElementById("password-length");
const uppercaseCondition = document.getElementById("uppercase-condition");
const lowercaseCondition = document.getElementById("lowercase-condition");
const symbolsCondition = document.getElementById("symbols-condition");
const numbersCondition = document.getElementById("numbers-condition");

const conditionsChecklist = [
  uppercaseCondition,
  lowercaseCondition,
  symbolsCondition,
  numbersCondition,
];

function toIncludeCharacters() {
  const uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  const symbols = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
  const numbers = "1234567890";

  const charactersList = [uppercaseLetters, lowercaseLetters, symbols, numbers];
  let includedCharacters = "";

  for (let i = 0; i < conditionsChecklist.length; i++) {
    if (conditionsChecklist[i].checked) {
      includedCharacters += charactersList[i];
    }
  }

  return includedCharacters;
}
console.log(toIncludeCharacters());

function passwordLength() {
  return passwordLengthCondition.value;
}

function generatePassword() {
  let password = "";
  let includedCharacters = toIncludeCharacters();
  let passwordLengthValue = passwordLength();

  for (let i = 0; i < passwordLengthValue; i++) {
    password += includedCharacters.charAt(
      Math.floor(Math.random() * includedCharacters.length)
    );
  }

  return password;
}

console.log(generatePassword());

// console.log(generatePassword())

const generatePasswordButton = document.getElementById("create-password");
generatePasswordButton.addEventListener("click", () => {
  document.getElementById("generated-password").textContent =
    generatePassword(passwordLength);
});
