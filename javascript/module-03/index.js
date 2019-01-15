const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 14) {
        return true;
    }

    return false;
};

const isLoginUnique = function(allLogins, login) {
    if (allLogins.includes(login)) {
      return false;
    }

    return true;
};

const addLogin = function(login) {
  if (isLoginValid(login) === false) {
      return "Ошибка! Логин должен быть от 4 до 16 символов";
  } 

  if (isLoginUnique(logins, login) === false) {
      return "Такой логин уже используется!";
  }
  
  logins.push(login);
  
  return "Логин успешно добавлен!";
};

console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'