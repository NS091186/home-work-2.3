//Задание 1: Определения операторов и операндов
//Инструкция: В каждой строке кода ниже найдите операторы и операнды, отметьте их в комментариях.
let x = 5 + 10 * 2; // операторы + и *, операнды 5,10, 2.
let isValid = (x > 10) && (x < 30); // операторы >, &&, <; операнды x,10,x,30 (x>10), (x<30).
x++; // оператор ++,  операнд x
delete obj.prop; // оператор delete и операнд obj.prop
//Задание 2: Арифметические операторы
//Инструкция: Напишите программу, которая вычисляет и выводит на экран результаты следующих операций:
//1 Сложение двух чисел.
let x = a+b;
console.log(x);
//2 Разность двух чисел.
let x = a-b;
console.log(x);
//3 Произведение двух чисел.
let x = a*b;
console.log(x);
//4 Деление двух чисел.
let x = a/b;
console.log(x);
//5 Остаток от деления двух чисел.
let x = a%b;
console.log(x);
//6 Возведение числа в степень.
let x = a**b;
console.log(x);
//Задание 3: Бинарные и унарные операторы
//Инструкция: Рассмотрите следующий код и объясните, какие операторы являются бинарными, а какие унарными.
let a = 10;//
let b = -a; //унарный оператор, меняет переменную "а" на противоположную с минусом
a++; // Унарный оператор инкремент, увеличивает значение переменной на 1 и возвращает 
let c = a + b; // бинарный оператор
//Задание 4: Операторы проверки отношений
// Инструкция: Напишите код, который будет сравнивать два числа и выводить сообщения о том, какое из них больше, меньше или равны друг другу.
let x = 15;
let y = 20;
if (x<y) {
    console.log ("x меньше, чем y");}
   else if (x>y) {
    console.log ("x больше, чем y");
   } 
else {
    console.log("x равно y");}

// Напишите код для сравнения и вывода сообщений
//Задание 5: Проверка на равенство и неравенство
//Инструкция: Определите результат выполнения следующих выражений. Объясните, почему результат таков.
5 == '5'; // Оператор == сравнивает значения операнды 5 и "5", при этом переводя строковую "5" в число, сравнение будет верным true
5 === '5'; // Оператор строго равенства === сравнивает и по значению и по типу, результат будет False
== undefined; // Равно 0 или undefined
=== undefined; // равно undefined
//Задание 6: Оператор in
//Инструкция: Используя оператор in , проверьте наличие ключа в объекте. Объясните результат.
let user = {
name: 'John',
age: 30
};
console.log('name' in user); // True, т.к. ключ "name" присутствует в объекте
console.log('email' in user); //False, т.к. ключ "email" отсутствует, т.к. в массиве user были заданы только свойства name и age
//Задание 7: Оператор присваивания и комбинирование с другими операторами
//Инструкция: Преобразуйте следующие выражения с использованием комбинированных операторов присваивания:
let a = 10;
a = a + 5; // a+=5
a = a * 2; // a*=2
a = a - 3; // a-=3
//Задание 8: Логические операторы
//Инструкция: Напишите код, который использует логические операторы && , || и ! для проверки нескольких условий.
let isAdmin = true;
let isLoggedIn = false;
let canViewPage = isAdmin && isLoggedIn; // false, т.к. оператор && возвращает true только если оба аргумента true
let hasPermission = isAdmin || isLoggedIn; // true, т.к. комбинация "true||false" возвращает true
let isGuest = !isLoggedIn; // true, оператор ! меняет значение ложь в истину, и наоборот
//Задание 9: Тернарный оператор
//Инструкция: Используйте тернарный оператор для того, чтобы вывести сообщение "Добро пожаловать", если переменная isLoggedIn истинна, и "Вход
//запрещен", если она ложна.

let isLoggedIn = true; // Или false, попробуйте оба варианта
let result = isLoggedIn? 'Добро пожаловать':'Вход запрещен'// Напишите тернарный оператор здесь
console.log(result);
//Задание 10: Оператор typeof и оператор delete
//Инструкция: Используя оператор typeof , определите типы данных для следующих значений и удалите свойство из объекта с помощью оператора
delete .
console.log(typeof 123); // number
console.log(typeof 'Hello'); // string
console.log(typeof undefined); // undefined
let car = {
make: 'Toyota',
model: 'Corolla'
};
delete car.model; // свойство удалилось
console.log(car); // Проверьте объект
