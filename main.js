
/*_________________________ uyga vazifa ____________________________________ */
// // 1-masala forEach
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(value, index, a) {
//     console.log(value);
// });

// let num = [1, 2, 3, 4, 5];

// num.forEach(function(value, index, a) {
//     console.log(value + 5);
// });

// let num1 = [1, 2, 3, 4, 5];

// num1.forEach(function(value, index, a) {
//     if (value % 2 !== 0) {
//         console.log(value);
//     }
// });

// let num2 = [1, 2, 3, 4, 5];
// let count = 0;

// numbers.forEach(function() {
//     count++;
// });

// console.log("Elementlar soni: " + count);

// let num3 = [1, 2, 3, 4, 5];
// let newArr = [];

// num3.forEach(function(value, index, a) {
//     newArr.push(value);
// });

// console.log("Yangi massiv: ", newArr);

// // 2-masala map

// let num = [8, 4, 3, 7, 5];
// let dou = num.map(value => value * 2);
// console.log("2 baravar oshirilgan:", dou);

// let num1 = [1, 2, 3, 4, 5];
// let sqr = num1.map(value => value * value);
// console.log("Kvadratlarga ko'paytirilgan:", sqr);

// let str1 = ["apple", "banana", "orange", "yellow"];

// let upper = str1.map(str => str.toUpperCase());
// console.log("Katta harflarga aylantirilgan:", upper);

// let num3 = [1, 2, 3, 4, 5];
// let negativ = num3.map(value => -value);
// console.log("Manfiy sonlar:", negativ);

// let num4 = [1, 2, 3, 4, 5];
// let add = num4.map(element => element + 3);
// console.log("3 soni qo'shilgan:", add);

// // 3-masala filter

// let num = [1, -2, 3, 4, -5, 6, 7, 8];
// let couple = num.filter(value => value % 2 == 0);
// console.log("Juft sonlar:", evenNumbers);

// let num1 = [1, -2, 3, 4, -5, 6, 7, 8];
// let pos = num1.filter(value => value > 0);
// console.log("Musbat sonlar:", pos);

// let word = ["hello", "world", "javascript", "node"];
// let word1 = word.filter(letter => letter.length > 5);
// console.log("5 belgidan katta so'zlar:", word1);

// let arr = [12, 25, 18, 30, 17, 19];
// let big = arr.filter((age) => age > 18);
// console.log("18 yoshdan katta:", big);

// let num3 = [1, -2, 3, 4, 12, 25, 55];
// let low = num3.filter(value => value < 10);
// console.log("10 dan kichik sonlar:", low);

// // 4-masala find
// let num = [1, 3, 4, 9, 8, 11, 13, 15,];
// let tenbig = num.find(value => value > 10);
// console.log("10 dan katta son:", tenbig);

// let num1 = [1, -2, -3, 4, -5, 9];
// let numpos = num1.find((value) => value > 0);
// console.log("Musbat son:", numpos);

// let word = ["hello", "world", "javascript", "node"];
// let firstword = word.find(sum => sum.length > 4);
// console.log("4 belgidan katta so'z:", firstword);

// let num2 = [1, 4, -5, 8];
// let even = num2.find(value => value % 2 == 0);
// console.log("Juft son:", even);

// let num3 = [0, 1, -2, -3, 4, -5, 9];
// let zero = num3.find((value) => value >= 0);
// console.log("0 va undan katta son:", zero);

// // 5-masala some
// let num = [1, -2, 3, 4, -5, 6, 7, 8];
// let Negative = num.some(value => value < 0);
// console.log("0 dan kichik son bormi?", Negative);

// let num1 = [1, -2, 3, 4, -5, 6, 7, 8];
// let Even = num1.some((value) => value % 2 == 0);
// console.log("Juft son bormi?", Even);

// 3. "apple" so'zi mavjudmi?
// let fruits = ["banana", "orange", "apple", "grape"];
// let Apple = fruits.some((fruit) => fruit == "apple");
// console.log("Apple so'zi bormi?", Apple);

// let num2 = [1, -2, 3, 4, -5, 6, 7, 8];
// let Positive = num2.every((all) => all > 0);
// console.log("Barcha sonlar musbatmi?", Positive);

// 5. Barcha elementlar satrmi?
// let word = ["hello", "world", 7, "javascript", "node", 5];
// let allStrings = word.every((word) => typeof word == "string");
// console.log("Barcha elementlar satrmi?", allStrings);

// let num3 = [1, 3, 4, 6, 7, 8, 101];
// let Hundred = num3.every((value) => value < 100);
// console.log("Barcha sonlar 100 dan kichikmi?", Hundred);
