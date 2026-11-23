// 1. Визначення оцінки
const score = Number(prompt("Enter your test score (0-100):"));
score >= 60 ? console.log("Passed") : console.log("Failed");

// 2. Вибір напою
const drink = Number(
  prompt("Choose a drink:\n1 — Coffee\n2 — Tea\n3 — Juice\n4 — Water"),
);
switch (drink) {
  case 1:
    console.log("Coffe");
    break;
  case 2:
    console.log("Tea");
    break;
  case 3:
    console.log("Juice");
    break;
  case 4:
    console.log("Water");
    break;
  default:
    console.log("Unknown drink");
}

// 3. Пошук найбільшого числа
const a = Number(prompt("Enter the first number:"));
const b = Number(prompt("Enter the second number:"));
const c = Number(prompt("Enter the third number:"));

let max;

if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}

console.log("The largest number is: ", max);

// 4. Підрахунок суми
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

// 5. Таблиця множення
const number = Number(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// 6. Робота з рядком
const word = "amazing";
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "a") {
    count++;
  }
}
console.log(`${count} letters "a" are found in the word "${word}"`);

// 7. Функція для розрахунку ціни
function calculatePrice(price, quantity){
    const total = price * quantity;
    console.log(total);
}

calculatePrice(250, 3);
calculatePrice(1200, 4);
calculatePrice(89, 5);