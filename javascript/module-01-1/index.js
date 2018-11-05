const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cancelledByUser = 'Отменено пользователем!';
const welcomeToSite = 'Добро пожаловать!';
const accessDenied = 'Доступ запрещен!';

const login = prompt("Enter your login");

if (login === adminLogin) {
    const password = prompt("Enter your password");

        if (password === null) {
            alert(cancelledByUser);
        } else if (password === adminPassword) {
            alert(welcomeToSite);
        } else {
            alert(accessDenied);
        }
} else if (login === null) {
    alert(cancelledByUser);
} else {
    alert(accessDenied);
}

