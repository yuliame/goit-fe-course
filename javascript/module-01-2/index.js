const sharm = 15;
const hurgada = 25;
const taba = 6;

const amountOfSeats = prompt("Please, enter the amount of seats needed");

if (amountOfSeats > 0 && Number.isInteger(+amountOfSeats))  {
    if (amountOfSeats <= taba) {
       if (confirm ("Согласны ли Вы быть в группе Taba?")) {
            alert("Приятного путешествия в группе Taba");
       } else {
            alert("Нам очень жаль, приходите еще!");
       }
    } else if (amountOfSeats > taba && amountOfSeats <= sharm) {
        if (confirm ("Согласны ли Вы быть в группе Sharm?")) {
            alert("Приятного путешествия в группе Sharm");
        } else {
            alert("Нам очень жаль, приходите еще!");
        }
    } else if (amountOfSeats > sharm && amountOfSeats <= hurgada) {
        if (confirm("Согласны ли Вы быть в группе Hurgada")) {
            alert("Приятного путешествия в группе Hurgada");
        } else {
            alert("Нам очень жаль, приходите еще!");
        }
    } else if (amountOfSeats > hurgada) {
            alert("Извините, столько мест нет ни в одной группе!");
    } 

} else {
    alert("Ошибка ввода!");
}     
