/*
 * Задачи на математические функции JavaScript
 */

/* 
? 2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. 
*/

// let a = prompt("Введите число a", 10);
// let b = prompt("Введите число b", 2);
// const rest = a % b;
// console.log(!rest ? "Делится" : `Делится с остатком ${rest}`);

/*
 * Работа со степенью и корнем
 */

// const st = Math.pow(2, 10);
// console.log(st);

// const sqrt = Math.sqrt(245);
// console.log(sqrt);

// const arr = [4, 2, 5, 19, 13, 0, 10];
// const total = arr.map(e => Math.pow(e, 3)).reduce((acc, curr) => acc + curr);
// console.log(Math.sqrt(total));

// ? Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// const num = Math.sqrt(379);
// console.log({ num });
// console.log("Do celih", Math.round(num));
// console.log("Do celih", +num.toFixed());
// console.log("Do desyatyh", +num.toFixed(1));
// console.log("Do sotih", +num.toFixed(2));

// const num = Math.sqrt(587);
// console.log({ num });
// const obj = { floor: Math.floor(num), ceil: Math.ceil(num) };
// console.log(obj);

// ? Нахождение максимального и минимального числа
// const arr = [4, -2, 5, 19, -130, 0, 10];
// console.log(Math.min.apply(null, arr));
// console.log(Math.max.apply(null, arr));

// ? Выведите на экран случайное целое число от 1 до 100.
// const getRandomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(getRandomInt(10, 100));

// ? Заполните массив 10-ю случайными целыми числами.
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 100 + 1));
// }
// console.log(arr);

// ? Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 100 + 1));
// }
// console.log(arr);

// const avg = arr.reduce((a, b) => a + b) / arr.length;
// console.log({ avg });

// ? Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
// let fact = 1;
// const num = 10;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log({ fact });
