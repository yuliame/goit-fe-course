const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const login = prompt("Enter your login");

if (login === adminLogin) {
    const password = prompt("Enter your password");

        if (password === null) {
            alert("Отменено пользователем!");
        } else if (password === adminPassword) {
            alert("Добро пожаловать!");
        } else {
            alert("Доступ запрещен!");
        }
} else if (login === null) {
    alert("Отменено пользователем!");
} else {
    alert("Доступ запрещен!");
}

