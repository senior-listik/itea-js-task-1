    // 1. Сделать собственные примеры методов применяемых для массивов.

//join:
let arr = ['block', 'style', 'background'];
let block = arr.join('.')
console.log(block);
    
// concat:
let arr2 = ['width', 'height', 'color', 'border'];
let arrNew = arr.concat(arr2);
console.log(arrNew);

// Reverse
arrNew = arrNew.reverse();
console.log(arrNew);

// Slice
let someWords = arrNew.slice(1, 6);
console.log(someWords);

// splice 
let wordsDel = someWords.splice(1, 2);
console.log(wordsDel);
console.log(someWords);
someWords.splice(1, 0, 'display', 'flex', 'grid', 'block');
console.log(someWords);

//sort
let sortSomeWords = someWords.sort();
console.log(sortSomeWords);

//push
let arrLength = sortSomeWords.push('gap');
console.log(sortSomeWords);
console.log(arrLength);

//pop
let valDel = sortSomeWords.pop('gap');
console.log(sortSomeWords);
console.log(valDel);

//unshift
let newLength = sortSomeWords.unshift('gap');
console.log(sortSomeWords);
console.log(newLength);

//shift
let firstValDel = sortSomeWords.shift();
console.log(sortSomeWords);
console.log(firstValDel);
console.log('****************************')

    // 3. Определить элементы массива и вывести их значения, индексы которых лежит в указанном пределе. Предел вводит пользователь.

// console.log(someWords);
// let n = +prompt('Введите предел количества значений для вывода');

// for (i = 0; i < n; i++) {
//     if (n > someWords.length) {
//         n = +prompt(`Введенное Вами число превышает длину массива. Введите число меньше или равное ${someWords.length}`);
//     }
//        document.write(someWords[i] + '<br>');
//     } 
 
// console.log('******************************');
    // 4. Отсортировать массив на 10 чисел в порядке возростания. Значения принимаются от пользователя. Сортировка осушествляется методом sort().
// let numbers = [];

// for (i = 1; i <= 10; i++) {
//     numbers.push(+prompt(`Введите ${i}e число от 0 до 10`));
// }
// console.log(numbers.sort());
    
    // 5. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.

// let a = +prompt(`Введите инднекс элемента, после которого необходимо выполнить вставку в массив (от 0 до ${someWords.length})`);
// someWords.splice(a, 0, 'GOOOOOD');
// console.log(someWords);

    // 6. Необходимо получить предпоследний элемент из массива month и вывести его на экран.
    // var month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] - 3 способами

let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//1
document.write(month[month.length - 2] + '<br>');
//2
document.write(month.slice(10, 11) + '<br>');
//3
document.write(month.slice(10, 11) + '<br>');
    