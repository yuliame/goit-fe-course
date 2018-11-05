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
} while(userInput !== null);

if (numbers.length > 0 ) {
    for(const value of numbers) {
        total += value;
    }
    alert(`Общая сумма чисел равна ${total}`);
}