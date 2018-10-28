const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let authLogin;

do {
 let authLogin = prompt("Please, enter your password");
    if (passwords.includes(authLogin)) {
        alert("Добро пожаловать!");
        break;
    } else if (authLogin === null){
        break;
    } else if (attempts === 1) {
        alert("У вас закончились попытки, аккаунт заблокирован!");
        break;
    } else if (attempts !== 1) {
        attempts -=1;
        alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    } 

} while(attempts > 0 && authLogin !== null);