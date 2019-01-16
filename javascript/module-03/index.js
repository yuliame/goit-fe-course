const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const loginExists = "Такой логин уже используется!";
const loginError = "Ошибка! Логин должен быть от 4 до 16 символов";
const loginAdded = "Логин успешно добавлен!";

const isLoginValid = (login) => {
    return login.length >= 4 && login.length <= 14;
}

const isLoginUnique = (allLogins, login) => {
    return allLogins.includes(login);
}

const addLogin = (login) => {
  if (!isLoginValid(login)) {
      return loginError;
  } 

  if (isLoginUnique(logins, login)) {
      return loginExists;
  }
  
  logins.push(login);

  return loginAdded;  
};

console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'