    // 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
    //    Функция должна расчитывать результат операции, исходя из переданного ей знака.
    //    Функция должна проверять корректность введенных чисел и знака операции.
    //    Все аргументы для функции принять от пользователя.

let a = +prompt('Первое число');
let sign = +prompt('Действие');
let b = +prompt('Второе число');
let result;
calculate(a, b, sign)

function calculate(operand1, operand2, sign) {
    result = operand1 + sign + operand2;
    document.write(result);
    }

    // 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

// function exponentiate(num, exp) {
//     let result = num;
//     for (let i = 1; i < exp; i++){
//         result = num * result;
//     }
//         document.write(`<p>${num}<sup>${exp}</sup> = ${result}</p>`)
//     }
// exponentiate(56, 3); 

    // 3.  Создать игру "Камень-Ножницы-Бумага".
        // Выбор компьютера определяется строкой:
        // "var computerChoice = Math.random();
        // alert(computerChoice);".
        // Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.

    // 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

// function fibonacci(n){
// let g = -1;
// let h = 1;
// let k;
// for (i = 1; i <= n; i++){
//     k = g + h;
//     g = h;
//     h = k;
//     // document.write(`${k}, `)
// }
//     document.write(`${n}-е число Фибоначчи - ${k}`);
//     }
// fibonacci(4);

    // 5. Зробіть так, щоб користувач вводив різний текст для кожної комірки prompt

    //    function drawTable(col,row,text){
    //         document.write('<table border="1">');
    //         for(let j=1;j<=row;j++){
    //             document.write('<tr>')
    //             for (let i = 1; i <= col; i++){
    //                 text = prompt(`Введите текст ${[i]}й ячейки ${[j]}го ряда`)
    //                 document.write(`<td>${text}</td>`)
    //             }
    //             document.write('</tr>')
    //         }
    //         document.write('</table>')    
    //    }

// drawTable(5, 3);