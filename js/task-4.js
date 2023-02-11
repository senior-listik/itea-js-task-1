    // 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
    //    Функция должна расчитывать результат операции, исходя из переданного ей знака.
    //    Функция должна проверять корректность введенных чисел и знака операции.
    //    Все аргументы для функции принять от пользователя.

            let a = +prompt('Первое число');
            let c = prompt('Действие');
            let b = +prompt('Второе число');
            let result;

            calculate(a, b, c)

            function calculate(operand1, operand2, sign) {
                if (a === +a && b === +b) {
                    switch (c) {
                        case '+': document.write(result = a + b); break;
                        case '-': document.write(result = a - b); break;
                        case '/': document.write(result = a / b); break;
                        case '*': document.write(result = a * b); break;
                            default: alert('ERRRROR -- incorrect sign');
                }
                } else {
                    alert('ERRRROR -- incorrect number');
                }
                }


    // 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

function exponentiate(num, exp) {
    let result = num;
    for (let i = 1; i < exp; i++){
        result = num * result;
    }
        document.write(`<p>${num}<sup>${exp}</sup> = ${result}</p>`)
    }
exponentiate(56, 3); 

    // 3.  Создать игру "Камень-Ножницы-Бумага".
        // Выбор компьютера определяется строкой:
        // "var computerChoice = Math.random();
        // alert(computerChoice);".
        // Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
    
let userChoice = prompt('rock, scissors or paper? Enter the text of your choice').toLowerCase();

game(userChoice);

function game(user) {
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        computerChoice = 'rock';
    } else if (0.33 < computerChoice && computerChoice <= 0.66) {
        computerChoice = 'scissors';
    } else if (0.66 < computerChoice) {
        computerChoice = 'paper';
    }

    if (user == 'rock' && computerChoice == 'paper') {
        alert(`Computer choice is "${computerChoice}" --- COMPUTER WIN`);

    } else if (user == 'rock' && computerChoice == 'scissors') {
        alert(`Computer choice is "${computerChoice}" --- user WIN`);

    } else if (user == 'scissors' && computerChoice == 'paper') {
        alert(`Computer choice is "${computerChoice}" --- user WIN`);

    } else if (user == 'scissors' && computerChoice == 'rock') {
        alert(`Computer choice is "${computerChoice}" --- COMPUTER WIN`);

    } else if (user == 'paper' && computerChoice == 'rock') {
        alert(`Computer choice is "${computerChoice}" --- user WIN`);

    } else if (user == 'paper' && computerChoice == 'scissors') {
        alert(`Computer choice is "${computerChoice}" --- COMPUTER WIN`);

    } else {
        alert(`User choice is "${user}", Computer choice is "${computerChoice}" --- DRAW`);
    }
   }    


    // 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

function fibonacci(n){
let g = -1;
let h = 1;
let k;operand1operand1
for (i = 1; i <= n; i++){
    k = g + h;
    g = h;
    h = k;
    // document.write(`${k}, `)
}
    document.write(`${n}-е число Фибоначчи - ${k}`);
    }
fibonacci(4);

    // 5. Зробіть так, щоб користувач вводив різний текст для кожної комірки prompt

       function drawTable(col,row,text){
            document.write('<table border="1">');
            for(let j=1;j<=row;j++){
                document.write('<tr>')
                for (let i = 1; i <= col; i++){
                    text = prompt(`Введите текст ${[i]}й ячейки ${[j]}го ряда`)
                    document.write(`<td>${text}</td>`)
                }
                document.write('</tr>')
            }
            document.write('</table>')    
       }

drawTable(5, 3);