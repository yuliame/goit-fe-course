let userInput;
const numbers = [];
let total = 0;


do {
    userInput = prompt('Введите число', '');
    if (!isNaN(+userInput)) {
        numbers.push(+userInput);  
    } else {
        alert("Было введено не число, попробуйте еще раз");;
    }
} while(userInput);

for(const value of numbers) {
    total += value;
  }

if (numbers.length > 0 ) {
    alert(`Общая сумма чисел равна ${total}`);
}