    //  1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.


let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
let number3 = +prompt('Введите третье число');
let result;

if (number1 == number2 || number1 == number3 || number3 == number2) {
    alert('Ошибка');
} else {
    alert(result = (number1 + number2 + number3) / 3);
};


    // 2. Построить прямоугольный треугольник состоящий из символа "*".

document.write('<div>');
let number = 1;
for (let i = 0; i < 25; i++) {

            for (let j = 0; j < number; j++) {
                document.write("* ");
            }

    document.write("<br/>");
    number += 1;
        }
document.write('</div>');
    // 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

document.write('<div>');
    let d = +prompt('Введите первое число');
    let e = +prompt('Введите второе число');
    let f = +prompt('Введите третье число');
    
if (d > e && d > f) {
    document.write(d);
} else if (e > d && e > f) {
     document.write(e);
} else {
     document.write(f);
    }
document.write('</div>');

    // 4. Дано два числа A и B где (A<B).
    // Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
    // Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

document.write('<div>');    
        let a = +prompt("Введите первое число");
        let b = +prompt("Введите второе число, больше первого");
        result  = 0;
        document.write('Нечетные: ')
            for (let i = a + 1; i < b; i+=1)   {
                
                if (i % 2 > 0) {
                    document.write(`${i}, `);
                }
                result += i;
            }
        document.write(`<br/>Сумма чисел в промежутке между ${a} и ${b} = ${result}`);
document.write('</div>');

    // 5. Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов (n принять от пользователя).
    //    Числа Фибоначчи – это элементы числовой последовательности, в которой каждое последующее число равно сумме двух предыдущих.

document.write('<div>');
let n = +prompt('Введите желаемое количество чисел ряда Фибоначчи');
let g = 0;
let h = 1;
let k;
for (i = 0; i < n; i++){
    k = g + h;
    document.write(`${k}, `)
    g = h;
    h = k;

}
document.write('</div>');

    // 6. Вывести на экран таблицу умножения от 1 до 10.

document.write('<table class="table" border>');
for (i = 1; i <= 10; i++){
        document.write('<tr>');
        for (j = 1; j <= 10; j++){
            document.write(`<td>${j} x ${i} = ${i*j}</td>`);
        }
        document.write('</tr>');
}
document.write('</table>');
    