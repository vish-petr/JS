let name = 'АНДрей';
let surname = 'Комаров';

//Приводим всё к верхнему регистру
let nameUp = name.toUpperCase();
let surnameUp = surname.toUpperCase();


let correctName = nameUp.substr(0, 1) + nameUp.substr(1).toLowerCase();
let correctSurname = surnameUp.substr(0, 1) + surnameUp.substr(1).toLowerCase();
console.log(correctName + ' ' + correctSurname);

correctName === name ? console.log('Имя осталось без изменений') :
  console.log('Имя было преобразовано');

correctSurname === surname ? console.log('Фамилия осталась без изменений') : 
  console.log('Фамилия была преобразована')



