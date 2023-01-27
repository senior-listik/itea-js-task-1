
// 2. Обменять значения двух переменных, используя третью (буферную) переменную.

var a = 5;
var b = 3;
var c;
document.write(a, b);
c = a;
a = b;
b = c;
document.write(a, b);


// 3. Объявите две переменные: admin и name. Запишите в admin строку "Василий". Замените значение из admin в name. Выведите name.
    
var admin; 
var name;
admin = 'Василий';
name = admin;
document.write(name);


// 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести в консоль.

var name = prompt('Enter your name');
var lastName = prompt('Enter your last name');
var age = prompt('Enter your age');

console.log(`"Congratulations!!!" Your full name: ${name} ${lastName}, and you are ${age} years old`);

    
// 5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?".
// Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.

var age = prompt('Enter your age');
var answer = confirm(`Ваш возраст ${age} лет?`);
if (answer == true) {
    alert('TRUE');
} else {
    alert('FALSE');
}

