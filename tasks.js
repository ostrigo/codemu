'use strict';
/*
 ! Задачи на математические функции JavaScript
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

/*
 ! Задачи на функции работы со строками в JavaScript
 */

// ? Работа с length, substr, substring, slice. Работа с indexOf

// const str = "я учу javascript!";
// console.log(str.length);

// const str = "я учу javascript!";
// console.log(str.substr(2, 3));
// console.log(str.substring(2, 5));
// console.log(str.slice(2, -1));

// const str = "Дана переменная str, в которой хранится какой-либо текст.";
// const n = 10;
// let result;
// if (str.length > n) {
//   result = str.substr(0, n) + "...";
// } else {
//   result = str;
// }

// console.log({ result });

// const str = "Я-учу-javascript!";
// console.log(str.replace(/-/g, "!"));

// const date = "2025-12-31";
// const arr = date.split("-");
// const newDate = `${arr[2]}.${arr[1]}.${arr[0]}`;
// console.log(newDate);

// const arr = ["я", "учу", "javascript", "!"];
// console.log(arr.join("+"));

// const str = "преобразуйте первую букву строки в верхний регистр";
// console.log(str[0].toUpperCase() + str.slice(1));

// const str = "преобразуйте первую букву каждого слова строки в верхний регистр.";
// const newStr = str
//   .split(" ")
//   .map(e => e[0].toUpperCase() + e.slice(1))
//   .join(" ");
// console.log(newStr);

// const str = "var_test_text_some";
// const arr = str.split("_");
// for (let i = 1; i < arr.length; i++) {
//   arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// }
// console.log(arr.join(""));

// const str = "var_test_text_some_cool";
// const newStr = str
//   .split("_")
//   .map((e, i) => {
//     if (i >= 1) {
//       return e[0].toUpperCase() + e.slice(1);
//     } else {
//       return e;
//     }
//   })
//   .join("");
// console.log(newStr);

/*
! Задачи на функции работы с массивами в JavaScript
*/
// const a = [3, 4, 1, 2, 11, 22, 33, 7];
// a.sort((a, b) => b - a);
// console.log(a);

// const obj = { js: "test", jq: "hello", css: "world" };
// console.log(Object.keys(obj));

/*
! Практика на комбинации стандартных функций JavaScript
 */
// ? Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
// const str1 = "сделайте заглавным первый символ этой строки не используя цикл";
// console.log(str1[0].toUpperCase() + str1.slice(1));

// let str2 = "hello";
// str2 = str2.split("");
// str2[0] = str2[0].toUpperCase();
// const res = str2.join("");
// console.log(res);

// ? Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
// const str = "123456";
// const res = str
//   .split("")
//   .reverse()
//   .join("");
// console.log(res);

// ? Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл.
// let num = 3751;
// const arr = +num
//   .toString()
//   .split("")
//   .sort()
//   .join("");
// console.log(arr);

// ? Проверьте, что строка начинается на http://.
// const exp = window.location.href.indexOf("http://");
// console.log(!Boolean(exp) ? "est popadanie" : "net");

// const str = "index.html";
// const regexp = /(html)$/gi;
// console.log(str.search(regexp));
// console.log(Boolean(str.search(regexp)));

/*
! Задачи на приемы работы с флагами на JavaScript
 */
// ? Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// const arr = [1, 2, 3, 4, 5, 5, 7, 8];
// const flag = arr.some(e => e === 5);
// console.log(flag ? "est" : "net");

// ? Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// const num = 31;
// let flag = false;
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     flag = true;
//     break;
//   }
// }
// console.log(flag);

// ? Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
// const arr = [1, 2, 3, 4, 5, 6, 7, 7];
// let flag = false;
// for (let i = 1; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === arr[i - 1]) {
//     flag = true;
//     break;
//   }
// }
// console.log(flag ? "да" : "нет");

/*
! Задачи на приемы работы с циклами на JavaScript
*/

// let str = '';
// for (let i = 9; i > 0; i--) {
//   str += i;
// }
// console.log(str);

// let str = "-";
// for (let i = 1; i < 10; i++) {
//   str += i + "-";
// }
// console.log(str);

// ? Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
// let str = '';
// for (let i = 0; i < 20; i++) {
//   str += 'x';
//   console.log(str + '\n');
// }

// ? С помощью двух вложенных циклов нарисуйте следующую пирамидку
// for (let i = 1; i < 10; i++) {
//   let str = '';
//   for (let j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str + '\n');
// }

// ? Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for
// let str = '';
// for (let i = 0; i < 10; i++) {
//   str += 'xx';
//   console.log(str + '\n');
// }

/*
! Задачи на приемы работы с массивами на JavaScript http://code.mu/tasks/javascript/base/priemy-raboty-s-massivami-na-javascript.html
 */
// ? Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// const arr = [];
// let str = "x";
// for (let i = 0; i < 10; i++) {
//   arr.push(str);
//   str += "x";
// }
// console.log(arr);

// ? Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// const arr = [];
// for (let i = 1; i < 10; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += i;
//   }
//   arr.push(str);
// }
// console.log(arr);

// ? Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// const arrayFill = (val, len) => {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(val);
//   }
//   return arr;
// };
// console.log(arrayFill("c", 10));

// ? Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   count++;
//   if (sum >= 10) break;
// }
// console.log(count);

// const array = [1, 2, 3, 4, 5, 6];
// const func = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) return i + 1;
//   }
// };
// console.log(func(array));

// ? Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. Показать решение.
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [];
// for (let i = arr1.length - 1; i >= 0; i--) {
//   arr2.push(arr1[i]);
// }
// console.log(arr2);

// ? Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// const sum = arr
//   .join(",")
//   .split(",")
//   .map(e => +e)
//   .reduce((acc, curr) => acc + curr);
// console.log(sum);

/*
! Правильное использование пользовательских функци - http://code.mu/tasks/javascript/base/pravilnoe-ispolzovanie-polzovatelskih-funkcij-javascript.html
 */
// ? Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа.
// const arr = [-10, 1, 2, 3, -1, -2, -3];
// const positive = arr => arr.filter(e => e > 0);
// console.log(positive(arr));

// ? Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// const getDigitsSum = num => {
//   let sum = 0;
//   for (const i of num.toString()) {
//     sum += Number(i);
//   }
//   return sum;
// };

// ? Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// for (let i = 1; i <= 2019; i++) {
//   getDigitsSum(i);
//   if (getDigitsSum(i) === 13) console.log(i);
// }

// ? Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenArr = arr.filter(e => e % 2 === 0);
// console.log(evenArr);

// ? Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
// const getDivisors = num => {
//   const arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) arr.push(i);
//   }
//   return arr;
// };
// console.log(getDivisors(128));

/*
! Продвинутая работа с пользовательскими функциями в JavaScript - http://code.mu/tasks/javascript/base/prodvinutaya-rabota-s-polzovatelskimi-funkciyami-v-javascript.html
 */
// ? Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
// const arr = [1, 2, 3, 4, 5, 6];
// const print = arrf => {
//   console.log(arrf.shift());
//   if (arrf.length != 0) {
//     print(arrf);
//   }
// };
// print(arr);

// ? Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
// const num = 555555555555555;
// const getDigitsSum = n => {
//   let sum = 0;
//   for (const i of n.toString()) {
//     sum += Number(i);
//   }
//   return sum;
// };

// const check = n => {
//   while (getDigitsSum(n) > 9) {
//     console.log(n);
//     n = getDigitsSum(n);
//     check(n);
//   }
//   return n;
// };

// console.log(check(num));

/*
! Задачи на основы работы с DOM в JavaScript - http://code.mu/tasks/javascript/dom/osnovy-raboty-s-dom-v-javascript.html
 */
// ? Задача. Повторите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута, возведенное в квадрат):

// const btn = document.getElementById("btn");
// btn.addEventListener("click", e => {
//   const input = document.getElementById("input");
//   const num = Number(input.value);
//   console.log(num * num);
// });
// ? Повторите поведение кнопки по нажатию на нее (она осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов):

// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   let input1 = document.getElementById('input1');
//   let input2 = document.getElementById('input2');
//   [input1.value, input2.value] = [input2.value, input1.value];
// });
// ? Задачи для решения
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', e => {
//   e.target.innerText = Number(e.target.innerText) + 1;
// });

/*
! Задачи на работу с элементами страницы в JavaScript - http://code.mu/tasks/javascript/dom/rabota-s-elementami-stranicy-v-javascript.html
 */
// ? При нажатии на кнопку текст в абзаце поменяется.
// const btn = document.querySelector('button');
// btn.removeAttribute('class');

/* 
! Задачи на даты в JavaScript - http://code.mu/tasks/javascript/dom/rabota-s-datami-v-javascript.html
 */
// ? Работа с new Date
// const now = new Date();
// const plusZero = num => {
//   return num >= 0 && num < 10 ? '0' + num : num;
// };
// console.log(
//   `${now.getHours()}:${now.getMinutes()}:${plusZero(
//     now.getSeconds()
//   )} ${now.getDate()}.${plusZero(now.getMonth() + 1)}.${now.getFullYear()}`
// );
// ? Работа с getDay
// ? Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски.
// const now = new Date();
// const day = now.getDay();
// const showDay = day => {
//   const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
//   return days[day];
// };
// console.log(showDay(5));
// const date = new Date('2015-01-07');
// const day = date.getDay();
// console.log(showDay(day));
// ? Выведите на экран количество секунд, которое осталось до конца дня.
// const now = new Date().getTime();
// const eod = new Date('2019-04-19T23:59:59').getTime();
// console.log(Math.floor((eod - now) / 1000));
/* 
! Задачи на работу с таймерами в JavaScript - http://code.mu/tasks/javascript/dom/rabota-s-tajmerami-v-javascript.html
*/
// ? Создайте отсчет от 0 до бесконечности:
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   const timer = () => {
//     const p = document.querySelector('p');
//     console.log('TCL: timer -> p', p);
//     p.textContent = Number(p.textContent) + 1;
//   };
//   window.setInterval(timer, 1000);
// });
// ? Создайте отсчет с кнопкой остановки:
// const btn = document.querySelector('button');
// const elem = document.querySelector('p');
// let id;
// const start = () => {
//   id = setInterval(() => {
//     elem.textContent = Number(elem.textContent) + 1;
//   }, 1000);
//   btn.removeEventListener('click', start);
//   btn.addEventListener('click', stop);
//   btn.textContent = 'stop';
// };
// const stop = () => {
//   clearInterval(id);
//   btn.removeEventListener('click', stop);
//   btn.addEventListener('click', start);
//   btn.textContent = 'start';
// };
// btn.addEventListener('click', start);
/* 
! Задачи на продвинутую работу с событиями в JavaScript - http://code.mu/tasks/javascript/dom/prodvinutaya-rabota-s-sobytiyami-v-javascript.html
 */
// ? На addEventListener, removeEventListener
// const elems = document.querySelectorAll('input');
// function func() {
//   alert(this.value);
//   this.removeEventListener('click', func);
// }
// elems.forEach(e => {
//   e.addEventListener('click', func);
// });
// ? Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
// const elems = document.querySelectorAll('a');
// function func() {
//   this.title = this.text;
// }
// elems.forEach(e => {
//   e.addEventListener('mouseover', func);
// });
// ? Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках
// const elems = document.querySelectorAll('a');
// function func() {
//   this.text = `${this.text} (${this.href})`;
//   this.removeEventListener('mouseover', func);
// }
// elems.forEach(e => e.addEventListener('mouseover', func));
// ? Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
// const elems = document.querySelectorAll('input');
// elems.forEach(e => e.addEventListener('blur', func));
// function func() {
//   if (this.dataset.length == this.value.length) {
//     this.style.border = '1px solid green';
//   } else {
//     this.style.border = '1px solid red';
//   }
// }
/* 
! Задачи на продвинутую работу с DOM на JavaScript - http://code.mu/tasks/javascript/dom/prodvinutaya-rabota-s-dom-na-javascript.html
 */
// const elem = document.querySelector('#elem');
// alert(elem.tagName);
// const parent = document.querySelector('ol');
// const li = document.createElement('li');
// li.innerHTML = 'dva';
// parent.appendChild(li);
// ? Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
// const ul = document.querySelector('ul');
// const arr = [1, 2, 3, 4];
// arr.forEach(e => {
//   const li = document.createElement('li');
//   li.innerHTML = e;
//   li.addEventListener('click', func);
//   ul.appendChild(li);
//   function func() {
//     alert(this.innerHTML);
//   }
// });
// ? Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
// const arr = ['item1', 'item2', 'item3', 'item4'];
// const ul = document.createElement('ul');
// arr.forEach(e => {
//   const li = document.createElement('li');
//   li.innerHTML = e;
//   ul.appendChild(li);
// });
// document.querySelector('body').appendChild(ul);
// ? Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
// const btn = document.querySelector('button');
// const div = document.querySelector('.main');
// const add = () => {
//   const input = document.createElement('input');
//   div.appendChild(input);
// };
// btn.addEventListener('click', add);
/* 
! Задачи на работу с метриками на JavaScript - http://code.mu/tasks/javascript/dom/rabota-s-metrikami-na-javascript.html
*/
// const btn = document.querySelector('button');
// const div = document.querySelector('#elem');
// const func = () => alert(pageYOffset);
// btn.addEventListener('click', func);
/*
! Задачи на основы работы с объектом Event на JavaScript - http://code.mu/tasks/javascript/dom/osnovy-raboty-s-objektom-event-na-javascript.html
*/
// const btn = document.querySelector('button');

// function func(event) {
//   event.ctrlKey
//     ? console.log('нажат Ctrl')
//     : event.altKey
//     ? console.log('нажат Alt')
//     : event.shiftKey
//     ? console.log('нажат Shift')
//     : console.log('ничего не нажато дополнительно');
// }
// btn.addEventListener('click', func);
const input = document.querySelector('#text');
const span = document.querySelector('#show');
const show = e => {
  span.innerHTML = String.fromCharCode(e.keyCode);
};
input.addEventListener('keypress', show);
