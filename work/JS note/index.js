// Урок № 4 Арифметичні оператори 

// const a = 1;
// const b = a + 'test';

// const d = 4 ** 5;
// let f = 4 ** 5;
// let s = 10 % 5;

// console.log(f, s);

// f = s++;

// console.log(f, s);

// Урок № 5 Оператори порівняння //

// const personAge = 10;
// const dogAge = 5;

// console.log(5 == 10);

// Урок № 6 Логічні оператори 

// const userRole = 1;
// const adminRole = 2;

// const productStockPrice = 99;
// const defaultProductPrice = 150;
// const adminPrice = 0;

// const productPrice = adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

// const defaultUserName = null;
// const ivanName = null;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// const authorName = ivanRole === adminRole && "Admin";

// console.log(authorName)

// ==========

// let productTitle = "Навушники";

// productTitle ||= "Назва товару";

// console.log(productTitle);


// Урок № 7 Побітові оператори

// let a = 11;
// let b = 12;

// console.log(a, a.toString(2));
// console.log(b, b.toString(2));

// let c = a & b;

// console.log(c, c.toString(2));


//  Урок № 8 Умовні розгалуження

// const productName = 'Мікрофон';
// const productDefault= 'Назва товару';

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";

// const updateProductName = userRole === 'admin' ? newProductName : productName;

// console.log(updateProductName);

// Урок № 9 Цикли

// let count = 0;
// let isFast = true;

// while (count < 5) {
//     console.log("hello world", count)

//     if (isFast && count >= 3) {
//         count = 5;
//     } else {
//         count++;
//     } 
// }

// ====================

// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_BALANCE = 2;

// let discountAmount = 0;
// let productCount = 0;

// while (productCount < PRODUCT_AMOUNT) {
//     productCount++;

//     if (productCount <= 0) {
//         break;
//     }

//     if(productCount <= 3) {
//         discountAmount += 1;
//     } else if (productCount > 3 && productCount <= 5) {
//         discountAmount += 1.5;
//     } else if (productCount > 5 && productCount <= 8) {
//         discountAmount += 2;
//     } else if (productCount > 8) {
//         discountAmount += 2.5;
//     }

//     if (DISCOUNT_BALANCE) {
//         discountAmount += DISCOUNT_BALANCE;
//     }

//     console.log(productCount, discountAmount);
// }

// console.log('Знижка:', discountAmount, '%');

//  =====================

// let container = 5;
// let storage = 20;

// let car = 0;

// do {
//     car++;
//     storage -= container;

//     console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//     console.log('Нам потрібна нова машина');
// }

// ==================

// let start = 0;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//     if (step === 0) {
//         console.log('Початок тренування');
//     }

//     start++;
//     step++;

//     if (step === goal || start === goal) {
//         console.log('Кінець тренування');
//         break;
//     }

//     if (step % rest === 0) {
//         console.log(`Зробіть перерву`);
//         continue;
//     }

//     if (step % set === 0) {
//         console.log(`Ви зробили ${step / set} сет(ів)`);
//     }

//     if (step === goal / 2) {
//         console.log(`Ви зробили половину тренувань`);
//     }

//     console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

//  ==================
// let q = 0;

// for (let i = 1, j = 5; i <= j; i++) {
//     console.log(i, j);

//     if (i === 3) {
//         j++;
//     }

//     for (; ; q++) {
//         console.log(q);

//         if (q >= i) {
//             break;
//         };
//     };
// }

// ================

// let age = 25;
// let hasExp = true;
// let hasEdu = false;
// let JS = true;

// form: {
//     if (age >= 18) {
//         if (hasExp) {
//             console.log(`Ви підходите`);
//             break form;

//             if (JS) {
//                 console.log(`Ви підходите`);
//             }
//         };
        
//         if (hasEdu) {
//             console.log(`Ви підходите`);
//         };
//     };

//     if (age < 18) {
//         console.log('Ви не підходите. Малий вік');
//     };
// }

// ========================= Табличка множення

// table: for (let i = 2; i < 10; i++) {
//     console.log(`Число ${i} ==================`);
//     for (let j = 2; j < 10; j++) {

//         if (i === 9) {
//             break table;
//         }
//         let result = i * j;
//         console.log(`${i} * ${j} = ${result}`)
//     }
// }

// Урок №10 Функції 

// function calcSpace(amount, unit = 'px') {
//    return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(4, 'px'));

// function playTrackById(trackId) {
//     /// отримати файл пісні і її запустити 
// }

// function stopTrackById(trackId) {
//     /// отримати файл пісні і поставити її на паузу
//     console.log(`Отримати файл пісні з ID ${trackId} і її поставити на паузу`) 
// }

// function play(trackName, trackId) {
//     console.log(`Запускаємо ${trackName}`);

//     playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//     console.log(`Завершили грати ${oldTrackName}`);
//     console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//     console.log(`Трек ${currentTrackName} на паузі`);

//     reloadDataTrack();

//     play();
// }

// function reloadDataTrack(amount) {
//     if(amount <= 0) {
//         console.log(`Дані оновлені вказану кількість разів`)
//     } else {
//         console.log('Повторне оновлення');
//         reloadDataTrack(amount - 1); 
//     }
// }

// reloadDataTrack(1);

// function pauseStopByTrack(trackName, trackId) {
//     let isPause = null;

//     return () => {
//         if(isPause == true) {
//             return;
//         }
        
//         stopTrackById(trackId);
//         console.log(`Трек ${trackName} на паузі`);
//         isPause = true;
//     }
// }

// const pauseStop123 = pauseStopByTrack('Rammstein');

// pauseStop123();

// const pauseStop456 = pauseStopByTrack('When the dream falls', 10);

// pauseStop456();


// // const runCommand = function(command, errorFn) {
// //     const result = command();

// //     if(!result) {
// //         return errorFn()
// //     }
// // }

// // runCommand(
// //     () => { 
// //         console.log(`Запуск команди`);

// //         return 1 -1;
// //     },
// //     () => console.log('Помилка')
// // );

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// console.log(a + b);

// Урок № 11 Вбудовані глобальні функції

// const code = '(5 + 5) % 5 === 0'

// console.log(eval(code))

// ==========

// function calcScreenRation(w, h) {
//     let result = w / h;

//     return isFinite(result) ? result : 'Error';
// }

// console.log(calcScreenRation(1920, 1080));

// ==============

// const num = parseInt('10');

// console.log(10 + num)

// ===============

// const domain = 'it-brains.com.ua';

// function redirectToPath(path) {
//     const link = encodeURI(`https://${domain}/${path}`);
//     console.log(link)
// } 

// const URI = "https://it-brains.com.ua//product/%D0%BA%D0%BA%D1%83%D0%B8%D1%83%D0%B5%D0%B87/info";

// function getUrl(urlInURI) {
//     urlInURI = decodeURI(urlInURI);
//     console.log(urlInURI)
// }

// redirectToPath("/product/ккуиуеи7/info")

// getUrl(URI);

//  Урок №12 Вбудовані можливості для числових типів

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;
// const d = a + b;

// console.log(d - c < Number.EPSILON);

// =============

// function reviewNumber(num) {
//     if(isNaN(num)) {
//         return console.log('Is NaN');
//     }

//     if(!num && num !== 0) {
//        return console.log('Bad Number', num);
//     }

//     if(!Number.isInteger(num)) {
//        return console.log('Дробове число', num);
//     }
//     return;
// }

// reviewNumber(10)

// ===============

// № 13 Вбудовані можливості для рядкових типів 

// const a = 'HelloWorld';

// console.log(a.length)

// console.log(String.fromCodePoint(128514)) // Смайлик

// ========

// const b = "319";

// console.log(b.codePointAt(0))

// console.log(String.raw`www.test.com\home`)

// const a = 'HelloWorld';

// console.log(a.concat(' ', " ", "!"));

// console.log(a.includes('lo'));

// ==============

// Урок № 14 Просунутий тип даних: Масив

// const a = 1;
// const b = 2;
// const c = 3;

// let list = [];

// console.log(list);

// ============

// const testArr = [];

// testArr[0] = "Start";
// testArr[1] = 2;
// testArr[2] = "Test123"
// testArr[3] = "123"

// delete testArr[2];

// console.log(testArr);

// =================

// const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]]

// console.log(big[0] [1] [2])

//===========================

// const location = [[100, 200], [200, 180], [300, 190]];

// for (const point of location) {
//     console.log(point)
// }

//==============================

// const location = [[100, 200], [200, 180], [300, 190]];

// for (const pointIndex in location) {
//     console.log(location[pointIndex]) 

//     for (const coordIndex in location[pointIndex]) {
//         console.log(location[pointIndex] [coordIndex])
//     }
// }

// =====================================

// const location = [[100, 200], [200, 180], [300, 190]];

// for (let i = 0; i < location.length; i++) {
//     console.log(location[i]);

//     for (let j = 0; j < location[i].length; j++) {
//         console.log(location[i] [j])
//     };
// }

// ==========================

// const l1 = [1, 3, 2];
// const l2 = [1, 2, 3];
// const l3 = l1;

// console.log(l1.toString() === l2.toString());

// console.log(l1, l3)

// ========================

// const location = [[100, 200], [200, 180], [300, 190]];

// const [a, ...b] = location;

// console.log(b)

// ===============================

// Урок № 15 Просунутий тип даних: Обєкт
// const key = "";

// const a = {
//     test: 100,
//     [key]: 200,
// }

// console.log(a[key])

// =====================


// const a = {
//     test: 100,
//     key: 200,

//     info: {
//         name: "Ivan",
//         age: 30,
//     }
// }

// console.log(a.info.name)

// ==================

// const person = {
//     name: "Ivan",
//     age: 24,
//     occupation: "Розробник",

//     address: {
//         city: "Київ",
//         street: "Вул. Шевченка",
//         houseNumber: 10,
//     }
// }

// for (const key in person) {
//     const item = person[key];
//     if(typeof person[key] === "object") {
//         for (const key2 in item) {
//             console.log(item[key2])
//         }
//     } else {
//         console.log(item);
//     }
// }

// =================================

// const person = {
//     name: "Ivan",
//     age: 24,
//     occupation: "Розробник",

//     address: {
//         city: "Київ",
//         street: "Вул.Шевченка",
//         houseNumber: 10,
//     }
// }

// const {name, age, address: {city}} = person;

// console.log(age, name, city)

// function getAddress({address: {city, street, houseNumber}}) {
    
//     return `Ваша адреса: ${city} ${street} ${houseNumber}`
// }

// let test = getAddress(person)
// console.log(test)

// ===========================

// const person = {
//     name: "Ivan",
//     age: 24,
//     occupation: "Розробник",

//     address: {
//         city: "Київ",
//         street: "Вул.Шевченка",
//         houseNumber: 10,
//     },

//     getAddress: function() {
//         return this.address;
//     }
// }
// console.log(person.getAddress())

// ===============================

// Number.prototype.toOwnString = function () {
//     console.log(this)

//     return `Число: ${this}`
// }

// const b = 1;

// const c = b.toOwnString()

// console.log(c)

// ==========================

// Урок № 16 Просунутий тип даних: Символи

// const phoneBook = {
//     me: "+3809348963",
//     name: "Phone book",
// }

// const user = {
//     name: "Olga",
//     id: 2462562354,
//     bookId: null,

//     getPhone(book) {
//         return book[this.bookId];
//     }
// }

// // ====

// function addToPhoneBook(phone, user) {
//     const symId = Symbol.for(user.id);

//     phoneBook[symId] = phone;

//     user.bookId = symId;
// }

// addToPhoneBook("+8426555682", user);

// // ==== 

// addToPhoneBook("+5426235682", user);

// // console.log(user.getPhone(phoneBook));

// // console.log(phoneBook);

// // const a = Symbol('1');
// // const b = Symbol('1');

// const id = user.bookId;

// // console.log(Symbol.keyFor(id))

// for(const key of phoneBook) {
//     console.log(key)
// }

// ==================

// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//         this.current = this.from;

//         return this;
//     },

//     next() {
//         return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
//     },
// };

// // for (let num of range) {
// //     console.log(num)
// // }

// const iterator = range[Symbol.iterator]();

// do {
//     console.log(iterator.current);
//     result = iterator.next();
// } while (!result.done);

// ===========================

// Урок № 17 Вбудовані можливості для масивів 1 частина

// const obj = { 0: "hello", 1: "world", 2: "!!!", length: 3, prefix: "():", }

// const arr = Array.from(
//     obj,
//     function (elem, index) {
//         return `${this.prefix}${elem}`
//     },
//     obj
// );

// console.log(Array.isArray(arr));

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [4, 5, 6];

// console.log(Array.of(...arr1, ...arr2));

// console.log(Array.of(1, 2, 3, 4, 5));

// console.log(arr1.at(1));

// console.log(-(arr1.length - arr1.push(10, 20, 30)))

// console.log(arr1.pop());

// console.log(arr1);

// console.log(arr1.shift());

// console.log(arr1);

// console.log(arr1.unshift(0, 1));

// console.log(arr1);

// console.log(arr2.includes(5));

// console.log(arr2.indexOf(5));

// const arr3 = arr1.concat(...arr2);

// console.log(arr3);

// console.log(arr1);

// arr1.copyWithin(2, 6, 8);

// console.log(arr1);

// arr1.fill(2, 6, 8);

// console.log(arr1);

// arr1.reverse();

// console.log(arr1);

// const filtredArr = arr1.filter((value, index, array) => value % 2 === 0);

// console.log(filtredArr);

// const sortFn = (elem1, elem2) => {
//     if(elem1 % 2 === elem2 % 2) {
//         return 0;
//     } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
//         return 1;
//     } else {
//         return -1;
//     }
// };

// const sortedArr = arr1.sort(sortFn);

// console.log(sortedArr);

// =======================

// console.log(["Arabic", "Info", "Zero", "City"].sort());

// console.log(arr2.every((elem, index, array) => elem >= 0));

// console.log(arr2.some((elem, index, array) => elem >= 0));

// ===============================

// Урок № 18 Вбудовані можливості для масивів 2 частина

// const userList = [
//     { id: 1, name: "Dima", age: 19},
//     { id: 54, name: "Ivan", age: 35},
//     { id: 6412, name: "Anton", age: 41},
// ];

// let minAge = 30;

// // const userBigAge = userList.sort((user1, user2) => {
// //     return user2.age - user1.age;
// // })

// // const userBigAge = userList.find(({age }) => age >= 30)

// // const userBigAge = userList.findIndex(({age }) => age >= 30)

// console.log(userBigAge);

// =============================

// const userList = [
//     { id: 1, name: "Dima", age: 19},
//     { id: 54, name: "Ivan", age: 35},
//     { id: 6412, name: "Anton", age: 41},
// ];

// const iter = userList.values();

// console.log(iter);

// const result = iter.next();

// console.log(result);

// for (const elem of iter) {
//     console.log(elem);
// }

// ===================================

// const arr = ["Apple", "Hotdog", "Bread", "Milk"]

// console.log(arr.join(", "))

// =============================

// const arr = ["Apple", "Hotdog", "Bread", "Milk"];

// const arrSmall = [...arr].splice(1, 2, "Tea", "Cheese");

// console.log(arrSmall);

// console.log(arr)

// =================================

// const userList = [
//     { id: 1, name: "Dima", age: 19},
//     { id: 54, name: "Ivan", age: 35},
//     { id: 6412, name: "Anton", age: 41},
// ];

// const result = userList.reduce((num, user, userIndex, array) => {
//     console.log(num, user.age);

//     return user.age > num ? user.age : num;
// }, 1);

// ========================================

// const userList = [
//     { id: 1, name: "Dima", age: 19, balance: 300},
//     { id: 54, name: "Ivan", age: 35, balance: 0},
//     { id: 6412, name: "Anton", age: 41, balance: 10200},
// ];

// const totalBalance = userList.reduce((num, user) => num + user.balance, 0)

// console.log(totalBalance);

// ===================================

// const userList = [
//     { id: 1, name: "Dima", age: 19, balance: 300},
//     { id: 54, name: "Ivan", age: 35, balance: 0},
//     { id: 6412, name: "Anton", age: 41, balance: 10200},
// ];

// const result = userList.map((user, index, array) => {
//     return user.name;
// });

// console.log(result.join(", "))

// =============================================

// const flatArray = [[100, 105], [200, 242], [300, 342], [123, 456]];

// console.log(flatArray.map((el) => [...el, el[0] - el[1]]));

// =============================================

// const flatArray = [
//     [
//         [500, 364],
//         [132, 131],
//     ],

//     [
//         [235, 344],
//         [122, 161],
//     ],
// ];

// const result = flatArray.map((el) => {
//     const newArr = el.map((it) => {
//         return it[0] - it[1];
//     });

//     console.log(newArr);

//     return newArr;
// });

// console.log(result);

// ==================================

// Урок № 19 Вбудовані можливості для Обєктів

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// articlePhoto = {
//     photoUrl: "...url",
//     photoId: 100,
//     photoType: "big",
// };

// articleCommentList = {
//     list: [{id: 4323, user: "Ivan", message: "Крутий коментар"}],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(article);

// =========================

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// articlePhoto = {
//     photoUrl: "...url",
//     photoId: 100,
//     photoType: "big",
// };

// articleCommentList = {
//     list: [{id: 4323, user: "Ivan", message: "Крутий коментар"}],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(Object.entries(article))

// =========================

// const objArr = [["id", 100432], ["title", "My title"], ["price", 1203]];

// console.log(Object.fromEntries(objArr))

// ========================================

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// console.log(article.hasOwnProperty("id"))

// =========================================

// const article = {
//     id: 105423,
//     title: "My article",
//     description: "This is info about article",
//     categoryId: 1423,
//     likeAmount: 442,
// };

// Object.freeze(article)

// console.log(article)

// =================================

// Урок № 20 Просунутий тип даних Множина

// const userList = new Set([136464, 262144, 543166, 643622])

// console.log(userList);

// for (const value of userList) {
//     console.log(value);
// };

// userList.forEach((value, value2, set) => console.log(value));

// console.log(userList.size);

// userList.add(46263);

// console.log(userList);
// console.log(userList.size);

// ==========

// userList.delete(136464);

// console.log(userList);
// console.log(userList.size);

// ==============================

// console.log(userList.has(136464))

// ============================

// userList.clear();
// console.log(userList);

// ====================================

// const key = userList.keys();

// console.log(key);

// ==============

// const key = userList.entries();

// console.log(key);

// ==========================

// const entry = userList.entries();

// const obj = Object.fromEntries(entry);

// console.log(obj);

// =================================

// const valueList = userList.values();

// const arr = Array.from(valueList);

// console.log(arr);

// =============================

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// const set = new Set(arr);

// const arr2 = Array.from(set);

// console.log(arr2);

// ==================================

// const categoryList = new Set();

// function addCategory(category) {
//     if(categoryList.has(category)) {
//         console.log("Ця категорія вже є")
//         return false;
//     } 

//     categoryList.add(category);
//     return true
// }   

// console.log(addCategory("Спорт"));
// console.log(addCategory("Спорт"));
// console.log(addCategory("Їжа"));

// ==============================

// const students = [
//     { id: 1, name: "John", course: "Math" },
//     { id: 2, name: "Jane", course: "Science" },
//     { id: 3, name: "Adam", course: "Math" },
//     { id: 4, name: "Eve", course: "English" },
//     { id: 5, name: "Kate", course: "Science" },
// ];

// const courseList = new Set(students.map((student) => student.course))

// console.log(courseList)

// ========================

// Урок № 21 Просунутий тип даних Словник

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// console.log(button);

// const obj = {
//     color: "red",
//     size: "32px",
// };

// const set = new Set(["red", "32px"])

// const button2 = new Map(Object.entries(obj));

// console.log(button2)

// const button3 = new Map(set.entries());

// console.log(button3)

// ===========================

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// const set2 = new Set(button.keys());

// console.log(set2)

// ===============

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// for (const [key, value] of button) {
//     console.log(key, value);
// };

// for (const value in Object.fromEntries(button.entries())) {
//     console.log(value);
// };

// button.forEach((key, value, map) => console.log(key, value, map))

// console.log(button.size)

//  =========

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// button.set("weight", 1000)
// console.log(button)

// console.log(button.get("weight"))

// button.delete("weight");

// console.log(button);

// =============

// const button = new Map(
//     [
//         ["color", "red"],
//         ["size", "32px"],
//     ],
// );

// console.log(button.has("color"))

// button.clear()

// console.log(button)

// ========

// const LANG_LIST = {
//     UA: 'uk-UA',
//     EA: 'ea-US',
// }

// const activeLang = LANG_LIST.EA;

// const product = {
//     price: 100,
//     amount: 3,

//     info: new Map([
//         [LANG_LIST.UA, {
//             title: "Заголовок",
//             info: "Інформація",
//         }
//         ],
//         [LANG_LIST.EA, {
//             title: "Title",
//             info: "Info",
//         }
//         ],
//     ])
// };

// const info = product.info.get(activeLang);
// console.log(info);

// console.log(product.info.has(activeLang))

// ==================

// const user1 = {
//     id: 1323,
//     name: "Ivan",
// };

// const user2 = {
//     id: 4231,
//     name: "Anton",
// };

// const product1 = {
//     id: 5314,
//     title: "Phone",
// };

// const product2 = {
//     id: 3244,
//     title: "Apple",
// };

// const userProduct = new Map();

// userProduct.set(user1, product1).set(user2, product2);

// console.log(userProduct);

// const productClientList = new Map();

// productClientList.set(product1, new Set());

// console.log(productClientList.set(product1, productClientList.get(product1).add(user1)));
// console.log(productClientList.set(product1, productClientList.get(product1).add(user2)));

// const has = productClientList.get(product1).has(user1);

// console.log(has);

// ==================
 
// Урок № 22 Вбудовані можливості: JSON та URL

// const roleField = "roleName";

// const data = {
//     id: 325,
//     login: "user1234",
//     password: "123456",
//     [roleField]: "Admin",
//     go() {
//         console.log("go");
//     },
// };

// const jsonData = JSON.stringify(data, (key, value) => {
//     if(key === roleField) {
//         return null;
//     }

//     if(typeof value === "string") {
//         return value.toUpperCase();
//     }

//     if(typeof value === "number") {
//         return value * 10;
//     }
//     return value;
// }, 1);

// console.log(jsonData);

// ========================
// const roleField = "roleName";

// const data = {
//     id: 325,
//     login: "user1234",
//     password: "123456",
//     [roleField]: "Admin",
//     go() {
//         console.log("go");
//     },
// };

// const jsonData = JSON.stringify(data, (key, value) => {
//     if(key === roleField) {
//         return null;
//     }

//     if(typeof value === "string") {
//         return value.toUpperCase();
//     }

//     if(typeof value === "number") {
//         return value * 10;
//     }
//     return value;
// }, 1);

// const parseData = JSON.parse(jsonData, (key, value) => {
//     if(key === roleField) {
//         return "Admin";
//     }

//     if(typeof value === "string") {
//         return value.toLowerCase();
//     }

//     if(typeof value === "number") {
//         return value / 10;
//     }
//     return value;
// }, 1);

// console.log(parseData);

// =============

// const url = new URL('https://www.example.com/path');

// console.log(url.href)

// ===========

// Урок № 23 Дата

// const date = new Date()

// const dateString = date.toISOString();

// console.log(dateString)

// const date2 = Date.parse(dateString) + 1000 * 60 * 5;

// console.log(date2);

// console.log(date.toString());

// console.log(date.toDateString());

// console.log(date.toTimeString());

// ===================

// const date = new Date()

// const zone = date.getTimezoneOffset() / -60;

// console.log(zone);

// ===================

// const user = -3;

// function getUserTimeZone(timeZone) {
    // let date = Date.now();
    // let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));

    // console.log(date.getHours());

    // console.log(date.toString());
    // console.log(date.toUTCString());

    // const myTimeZone = date.getTimezoneOffset() / -60;

    // date.setTime(date.getTime() - 1000 * 60 * 60 * myTimeZone);

    // date.setTime(date.getTime() + 1000 * 60 * 60 * timeZone);

    // return date;
// }

// const userDate = getUserTimeZone(user);

// console.log(userDate.toString());
// console.log(userDate.toUTCString());
// console.log(new Date(getUserTimeZone(user)).toString());

// ====================

// Урок № 24 Вбудовані можливості: Математика

// const a = 5;
// const b = 10;
// const c = -5;

// const arr = [10, 20, 30, 40]
// console.log(Math.max(a, b, c, ...arr))

// ====================

// const a = 5;

// console.log(Math.sign(a));

// ==================

// const a = 5;

// console.log(Math.pow(a, 2)) 

// ===============

// const a = 5;

// console.log(Math.sqrt(a))

// ===============

// console.log(Math.floor(1.1), Math.floor(1.5), Math.floor(1.9))

// console.log(Math.ceil(1.1), Math.ceil(1.5), Math.ceil(1.9))

// console.log(Math.round(1.1), Math.round(1.5), Math.round(1.9))

// console.log(Math.trunc(1.1), Math.trunc(1.5), Math.trunc(1.9))

// =================

// const random = Math.trunc(Math.random() * 100) + 1;

// console.log(random)

// ==============

// console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3))

//==============

// Урок № 25 Вбудовані можливості: Консоль 

// const timer = "Timer";

// console.time(timer);

// console.group("Group 1");
// console.log('Test');
// console.groupEnd()

// console.timeEnd(timer)

// ==================

// const test1 = () => console.trace("Hello");

// const test2 = () => test1();

// const test3 = () => test2();

// test3()

// ===================

// const data = [
//     { name: "John", age: 25, city: "New York" },
//     { name: "Alice", age: 30, city: "London" },
// ]

// console.table(data)

// ===============

// const a = 5;
// const b = 10;

// const result = a > b;

// console.assert(result, "info")

// ================

// console.log("%cHello World", "color: blue, font-size: 50px")

// ===============

// Урок № 26 Регулярні вирази

// Урок № 27 Вбудовані регулярні вирази

// const reg = /test/g;

// // const reg1 = RegExp("test", "g")
// // console.log(reg.flags)

// const result = reg.exec("This is test")

// console.log(result)

// ==========

// const reg = /test/g;

// const test = "This is test and est";

// const result = test.matchAll(reg)

// console.log(result.next());

// console.log(result.next());

// ==============

// Урок № 28 Обробка помилок

// try { 
//     const a = 10;
//     a = 5;
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("2")
// }

// =============

// function getUserData(userId) {
//     try { 
//         const a = 10;
//         a = 5;
//     } catch (err) {
//       const newErr = new Error(`Помилка. Неможливо отримати дані користувача ${userId}`, { cause: err, });
//       console.log(newErr)
//     }
// }

// getUserData(105134)

// ===============

// function sumNum(a, b) {
//     if(typeof a !== "number" || typeof b !== "number") {
//         throw new Error("Аргументи не є числами");
//     }
//     return a + b;
// }

// try {
//     sumNum(10, "abc");
// } catch (err) {
//     console.log(err.message)
// }

// ==============

// Урок № 29 ООП

// const Animal = {
//     name: "Тварина",
//     voice: "Звук",
//     say() { console.log(`${this.name} каже ${this.voice}`) },
// };

// const dog = {...Animal};

// dog.name = 'Бобік';
// dog.voice = 'Гав';

// dog.say()

// ====================

// const Animal = {
//     name: "Тварина",
//     voice: "Звук",
//     say() { console.log(`${this.name} каже ${this.voice}`) },
// };

// const dog = Object.create(Animal);

// dog.name = 'Бобік';
// dog.voice = 'Гав';

// dog.say()

// console.log(dog);

// Animal.go = function () {
//     console.log(`${this.name} біжить`);
// };

// dog.go();

// console.log(Object.getPrototypeOf(dog));

// console.log(Animal.isPrototypeOf(dog));

// Object.setPrototypeOf(dog, null);

// =================

// const Animal = {
//     name: "Тварина",
//     voice: "Звук",
//     say() { console.log(`${this.name} каже ${this.voice}`) },
// };

// const dog = Object.create(Animal);

// dog.name = 'Бобік';
// dog.voice = 'Гав';

// Object.defineProperty(dog, "age", {
//     set(value) {
//         this._age = value * 2;
//     },
//     get() {
//         return `${this._age || 0} років`
//     },
// })

// Animal.go = function () {
//     console.log(`${this.name} біжить`);
// };

// =============

// const Tag = {
//     render() {
//         return `<>${value}<>`;
//     },
// };

// const button = Object.create(Tag);

// button.render = function(value = "") {
//     return `<button style="${this.style}">${value}</button>`;
// };

// const mainButton = Object.create(button, {
//     style: {
//         value: "background: red",
//         writeble: true,
//     },
// });

// console.log(mainButton.render("Click"));

// const input = Object.create(Tag);

// input.render = function() {
//     return `<input placeholder="${this.placeholder}" style="${this.style}"/>`;
// };

// const loginInput = Object.create(input, {
//     style: {
//         value: "border: 1px solid red",
//         writeble: true,
//     },
//     placeholder: {
//         value: "Login...",
//     },
// });

// console.log(loginInput.render());

// const serverRequest = {
//     data: null,
//     getData() {
//         ///....
//     },
//     render() {
//         this.data = this.getData();
//         return `...`
//     },
// };

// ==============

// Урок № 30 Функція конструктор

// const User = {
//     login: null,
//     password: null,
//     role: null,
//     age: null,
// };

// const registerData = {
//     login: "ivan",
//     password: "123qwe456",
// };

// const user = Object.create(User, {
//     login: {
//         value: registerData.login,
//     },
//     password: {
//         value: registerData.password,
//     },
//     verify: {
//         value(password) {
//             return this.password === password;
//         },
//     },
// });

// console.log(user.login)

// ==========

// const adminData = {
//     login: "ivan",
//     password: "123qwe456",
//     isAdmin: true,
// };

// const adminUser = Object.create(User, {
//     login: {
//         value: registerData.login,
//     },
//     password: {
//         value: registerData.password,
//     },
//     role: {
//         value: isAdmin ? "Admin" : "User",
//     },
//     verify: {
//         value(password) {
//             return this.password === password;
//         },
//     },
// });

// console.log(user.login)

// ===============

// function User({ login = null, password = null, isAdmin = null, age = 0 }) {
//     this.login = login;
//     this.password = password;
//     this.role = isAdmin ? "Admin" : "User";
//     this.age = age;
//     this.verify = function(password) {
//         return this.password === password;
//     };
// };

// const adminData = {
//     login: "ivan",
//     password: "qwe123",
//     isAdmin: true,
// };

// const admin = new User(adminData);

// console.log(admin.password);

// const testData = {
//     login: "ivan",
//     password: "QWE123",
//     isAdmin: true,
// };

// const test = new User(testData);

// console.log(test.password);

// =============

// function User(data) {
//     if(new.target) {
//         const { login = null, password = null, isAdmin = null, age = 0 } = data

//         this.login = login;
//         this.password = password;
//         this.role = isAdmin ? "Admin" : "User";
//         this.age = age;
//         this.verify = function(password) {
//             return this.password === password;
//         };
//     } else {
//         return new User(data);
//     };
// };

// const adminData = {
//     login: "ivan",
//     password: "qwe123",
//     isAdmin: true,
// };

// const admin = User(adminData);

// console.log(admin.password);

// const testData = {
//     login: "ivan",
//     password: "QWE123",
//     isAdmin: true,
// };

// const test = new User(testData);

// console.log(test.password);

// ==========

// function User(data) {
//     if(new.target) {
//         const { login = null, password = null, isAdmin = null, age = 0 } = data
//         const role = isAdmin ? "Admin" : "User";
//         const object = Object.assign(this, {
//             login,
//             password,
//             role,
//             age,
//         })
//         if(role === "Admin") {
//             object.verify = function(password) {
//                 return this.password === password;
//             };
//         }
//         if(age >= 50) {
//             object.login = String(object.login).toUpperCase()
//         }
//         return object;
//     } else {
//         return new User(data);
//     };
// };

// const adminData = {
//     login: "ivan",
//     password: "qwe123",
//     isAdmin: true,
// };

// const admin = User(adminData);

// console.log(admin.login);

// const testData = {
//     login: "ivan",
//     password: "QWE123",
//     isAdmin: true,
//     age: 50,
// };

// const test = new User(testData);

// console.log(test.login);

// // ==========

// console.log(Object.getPrototypeOf(test) === User.prototype)

// ========

// function User(data) {
//     if(new.target) {
//         const { login = null, password = null, isAdmin = null, age = 0 } = data
//         const role = isAdmin ? "Admin" : "User";
//         const object = Object.assign(this, {
//             login,
//             password,
//             role,
//             age,
//         })
//         if(role === "Admin") {
//             object.verify = function(password) {
//                 return this.password === password;
//             };
//         }
//         if(age >= 50) {
//             object.login = String(object.login).toUpperCase()
//         }
//         return object;
//     } else {
//         return new User(data);
//     };
// };

// const testData = {
//     login: "ivan",
//     password: "QWE123",
//     isAdmin: true,
//     age: 50,
// };

// const test = new User(testData);

// console.log(test.login);

// const verifyUser = test.verify;

// console.log(verifyUser)

// console.log(verifyUser.apply(test, ["QWE123"]))

// ============

// Урок № 31 Класи

// class User {
//     login = null;
//     password = null;
//     role = null;
//     age = null;

//     isAdmin = () => {
//         return this.role === "Admin"
//     };
// };

// const user = new User();
// // console.log(user)

// function verifyAdmin(fn) {
//     const result = fn();
//     if(!result) {
//         throw new Error ("Не адмін");
//     }
//     return true
// };

// verifyAdmin(user.isAdmin)

// ===========

// class Person {
//     test = () => {
//         console.log("hello")
//     };
// }

// class User extends Person {
//     constructor(login, password) {
//         super()
//         this.login === login;
//         this.password === password;
//     }
//     #role = null;
//     age = null;

//     isAdmin = () => {
//         return this.role === "Admin"
//     };  
//     verify = (user1, user2) => {
//         return user1.login === user2.login
//     };
//     #createAdminUser = (login) => {
//         return new User()
//     };
//     static generateRandomPassword = () => {

//     }

//     get admin() {
//         return this.#role === "Admin"
//     };
//     set admin(value) {
//         this.#role = "Admin";
//     }
// };

// const user = new User("Ivan", "qwe123");

// console.log(user.test())

// Урок № 32 Патерни програмування 1 частина

// class RecentPurchases {
//     static #instance = null;

//     static #purchases = [];

//     static create() {
//         if (!this.#instance) {
//             this.#instance = new RecentPurchases();
//         }
//         return this.#instance;
//     }

//     static add(item) {
//         this.#purchases.push(item);
//     }

//     static get() {
//         return this.#purchases;
//     }
// }

// RecentPurchases.create();

// RecentPurchases.add(`Телефон`);
// RecentPurchases.add(`Навушники`);

// console.log(RecentPurchases.get());

// ===============

// class Button {
//     constructor({ text, color }) {
//         this.text = text;
//         this.color = color;
//     }

//     render() {
//         return `<button class="color:${this.color};">${this.text}</button>`;
//     }
// }

// class IconButton {
//     constructor({ icon, color }) {
//         this.icon = icon;
//         this.color = color;
//     }

//     render() {
//         return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
//     }
// }

// class ButtonFactory {
//     static TYPE = {
//         BASIC: "basic",
//         ICON: "icon",
//     }

//     static createButton(type, options) {
//         if(options.icon) {
//           return new IconButton(options);
//         }

//         if(options.text) {
//           return new Button(options);
//         }

//         return  new Error(`Такого типу кнопки не існує ${type}`);

//         // switch (type) {
//         //     case this.TYPE.BASIC:
//         //         return new Button(options);
//         //     case this.TYPE.ICON:
//         //         return new IconButton(options);
//         //     default:
//         //         throw new Error(`Такого типу кнопки не існує ${type}`);
//         // }
//     }
// }

// const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {color: "red", icon: "/icon/my-icon.svg"})

// console.log(myIconButton)

// =========== 

// class User {
//   constructor(email) {
//     this.email = email;
//   };

//   sendEmail(message) {
//     console.log(`Відправити на email ${this.email} повідомлення: ${message}`);
//   };
// };

// class Video {
//   constructor(name) {
//     this.name = name;
//   };
// };

// class Channel {
//   constructor(name) {
//     this.name = name;
//     this.subscribers = [];
//   };

//   subscribe(user) {
//     this.subscribers.push(user);
//   };

//   unsubscribe(user) {
//     this.subscribers = this.subscribers.filter((sub) => sub !== user);
//   };

//   createVideo(name) {
//     const video = new Video(name);
//     this.sendNotify(video);
//   };

//   sendNotify(video) {
//     this.subscribers.forEach((subscriber) => {
//       subscriber.sendEmail(
//         `Нове відео "${video.name}" на Youtube каналі ${this.name}!`
//       );
//     });
//   };
// };

// const channel = new Channel("IT Brains");

// const user1 = new User("john@email.com");
// const user2 = new User("jane@email.com");
// const user3 = new User("jeson@email.com");

// channel.subscribe(user1);
// channel.subscribe(user2);
// channel.subscribe(user3);

// channel.createVideo("Урок про HTML");

// channel.unsubscribe(user1);

// channel.createVideo("Урок про CSS");

// ================

// class Coffee {
//   name = "Кава";

//   cost = 10;

//   cook() {
//     console.log(`Приготування ${this.name}`);
//   };
// };

// class MilkDecorator {
//   constructor(coffee, amount) {
//     this.coffee = coffee;
//     this.amount = amount;
//   };

//   get name() {
//     return `${this.coffee.name}, з ${this.amount} мл молока`;
//   };

//   get cost() {
//     const milkPrice = 0.05;
//     return this.coffee.cost + milkPrice * this.amount;
//   };

//   cook() {
//     console.log(`Приготування ${this.name}`);
//   };
// };

// let coffee = new Coffee();
// console.log(coffee.name);
// console.log(coffee.cost);
// coffee.cook();

// let latteCoffee = new MilkDecorator(coffee, 300);
// console.log(latteCoffee.name);
// console.log(latteCoffee.cost);
// latteCoffee.cook();

// =============

// class TextEditor {
//   #text = "";

//   set text(text) {
//     this.#text = text;
//     this.#save();
//   }

//   get text() {
//     return this.#text;
//   }

//   #save() {
//     Snapshot.create(this.text);
//   }

//   restore() {
//     this.#text = Snapshot.restore().text;
//   }
// };

// class Snapshot {
//   constructor(text) {
//     this.text = text;
//   }

//   static #snapshots = [];

//   static create(text) {
//     this.#snapshots.push(new Snapshot(text));
//   }

//   static restore() {
//     this.#snapshots.pop();
//     return this.#snapshots[this.#snapshots.length - 1];
//   }
// }

// const editor = new TextEditor();

// editor.text = "Це початковий текст";
// editor.text = "Редагований текст";
// editor.text = "Оновлений текст";

// console.log("===");

// console.log(editor.text);

// console.log("===");

// editor.restore();

// console.log(editor.text);

// editor.restore();

// console.log(editor.text);

// ================

// class AuthHandler {
//   sendNextHandler(handler) {
//     this.nextHandler = handler;
//     return handler;
//   }

//   login(user, password) {
//     if(this.nextHandler) {
//       return this.nextHandler.login(user, password);
//     } else {
//       return false
//     }
//   }
// }

// class TwoFactorAuthHandler extends AuthHandler {
//   login(user, password) {
//     if(
//       user === "jonh" &&
//       password === "password" &&
//       this.isValidTwoFactorCode()
//     ) {
//       console.log("Вхід дозволено з двофакторною автентифікацією")
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }

//   isValidTwoFactorCode(){
//     return true;
//   }
// }

// class RoleHandler extends AuthHandler {
//   login(user, password) {
//     if(user === "guest") {
//       console.log("Вхід дозволено з роллю гостя");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }
// }

// class CredentialsHandler extends AuthHandler {
//   login(user, password) {
//     if(user === "admin" && password === "admin123") {
//       console.log("Вхід дозволено за логіном та паролем");
//       return true;
//     } else {
//       return super.login(user, password);
//     }
//   }
// }

// class HandlerBuilder {
//   constructor() {
//     this.firstHandler = null;
//     this.lastHandler = null;
//   }

//   add(handler){
//     if(!this.firstHandler) {
//       this.firstHandler = handler;
//       this.lastHandler = handler;
//     } else {
//       this.lastHandler.sendNextHandler(handler);
//       this.lastHandler = handler;
//     }
//     return this;
//   }

//   create() {
//     return this.firstHandler;
//   }
// }

// // const handler = new TwoFactorAuthHandler();

// // const handler2 = new CredentialsHandler();

// // handler2.sendNextHandler(new RoleHandler());

// // handler.sendNextHandler(handler2);

// // handler.login("guest", "admin123");

// const handlerBuilder = new HandlerBuilder();
// const handler = handlerBuilder
//   .add(new CredentialsHandler())
//   .add(new TwoFactorAuthHandler())
//   .add(new RoleHandler())
//   .create();

// handler.login("admin", "admin123");
// handler.login("jonh", "password");
// handler.login("guest", "guest123");
// handler.login("user", "password");

// ============

// class User {
//   constructor(name, messanger) {
//     this.name = name;
//     this.messanger = messanger;
//   }

//   sendMessage(message) {
//     const formattedMessage = this.formatMessage(message);
//     this.messanger.sendMessage(formattedMessage);
//   }

//   formatMessage(message) {
//     return `[${this.name}]: ${message}`;
//   }
// }

// class SMSMessenger {
//   static sendMessage(message) {
//     console.log(`Відправлено SMS: ${message}`);
//   }
// }

// class EmailMessenger {
//   static sendMessage(message) {
//     console.log(`Відправлено Email: ${message}`);
//   }
// }

// const john = new User("John", SMSMessenger);
// const jane = new User("Jane", EmailMessenger);

// john.sendMessage("Hello");
// jane.sendMessage("Hello");

// ===========

// Урок № 33 Патерни програмування 2 частина

// class Composite {
//     comments = [];

//     addComment(comment) {
//         this.comments.push(comment);
//     }

//     removeComment(comment) {
//         const index = this.comments.indexOf(comment);
//         if(index !== -1) {
//             this.comments.splice(index, 1);
//         }
//     }
// }

// class Comment extends Composite {
//     constructor(text) {
//         super();
//         this.text = text;
//     }

//     display() {
//         console.log(`- Коментар: ${this.text}`)
//         for(const comment of this.comments) {
//             comment.display()
//         }
//     }
// }

// class Video extends Composite {
//     constructor(title) {
//         super();
//         this.title = title;
//     }

//     display() {
//         console.log(`Відео: ${this.title}`)
//         for(const comment of this.comments) {
//             comment.display()
//         }
//     }
// }

// const video = new Video("Навчальне відео");

// video.addComment(new Comment("Дуже корисне відео"))
// video.addComment(new Comment("Дякую автору"))

// video.comments[0].addComment(new Comment("Корисний коментар"))

// video.display()

// ====================

// class Category {
//     static #categories = {};

//     constructor(name) {
//         this.name = name;
//     }

//     static create(name) {
//         if(!this.#categories[name]) {
//             this.#categories[name] = new Category(name);
//         }
//         return this.#categories[name];
//     }
// }

// class Product {
//     constructor(name, category) {
//         this.name = name;
//         this.category = category;
//     }

//     display() {
//         console.log(`Product: ${this.name}, Category: ${this.category.name}`)
//     }
// }

// const electonics = Category.create("Electronics");
// const books = Category.create("Books");
// const electonics2 = Category.create("Electronics");

// console.log(electonics, books, electonics2)
// console.log(electonics === electonics2)

// const product1 = new Product("Laptop", electonics);
// const product2 = new Product("Headphones", electonics);
// const product3 = new Product("Book title", books);
// const product4 = new Product("Smarphone", electonics);

// product1.display();
// product2.display();
// product3.display();
// product4.display();

// =============

// class CoffeeMachine {
//     prepareCoffee(){
//         this.boilWater();
//         this.grindCoffeeBeans();
//         this.#brewCoffee();
//         this.pourCoffee();
//         this.addIngridients();
//         this.serveCoffee();
//     }

//     boilWater() {
//         console.log("Boiling water...")
//     }

//     grindCoffeeBeans() {
//         console.log("Grinding coffee beans...")
//     }

//     #brewCoffee() {
//         console.log("brewing coffee...")
//     }

//     pourCoffee() {
//         console.log("Pouring coffee into cup...")
//     }

//     addIngridients() {
        
//     }

//     serveCoffee() {
//         console.log("Coffee served!")
//     }
// }

// class LatteMachine extends CoffeeMachine {
//     addIngridients() {
//         console.log("Adding milk to make a latte...");
//     }
// }

// class CappuccinoMachine extends CoffeeMachine {
//     addIngridients() {
//         console.log("Adding frothed milk and sprinkle of cocoa powder to make a cappuccino...");
//     }
// }

// const latteMachine = new LatteMachine();
// latteMachine.prepareCoffee();

// const cappuccinoMachine = new CappuccinoMachine();
// cappuccinoMachine.prepareCoffee();

// =========

// class TextFile {
//     constructor(name, content) {
//         this.name = name;
//         this.content = content;
//     }
// }

// class ImageFile {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// }

// class VideoFile {
//     constructor(name, duration) {
//         this.name = name;
//         this.duration = duration;
//     }
// }

// class TextEditor {
//   files = [];

//   addFile(file) {
//       this.files.push(file);
//   }

//   readTextFile(file) {
//       console.log(`Text file: ${file.name}, Size: ${file.content.length}, characters`)
//   }

//   readImageFile(file) {
//       console.log(`Image file: ${file.name}, Size: ${file.size}, KB`)
//   }

//   readVideoFile(file) {
//       console.log(`Video file: ${file.name}, Duration: ${file.duration}, minutes`)
//   }

//   readFiles() {
//     for(const file of this.files) {
//       if(file instanceof TextFile) {
//         this.readTextFile(file);
//       } else if(file instanceof ImageFile) {
//         this.readImageFile(file);
//       } else if(file instanceof VideoFile) {
//         this.readVideoFile(file);
//       }
//     }
//   }
// }

// const textEditor = new TextEditor();

// const textFile = new TextFile("document.txt", "Lorem");
// const imageFile = new ImageFile("image.jpg", 1024);
// const videoFile = new VideoFile("video.mp4", 60);

// textEditor.addFile(textFile);
// textEditor.addFile(imageFile);
// textEditor.addFile(videoFile);

// // console.log(textEditor);

// textEditor.readFiles()

// ==============

// class ElectronicPaymentSystem {
//   makePayment(amount) {
//     const convertedAmount = this.convertAmount(amount);
//     console.log(`Making electronic payment: $${convertedAmount}`)
//   }

//   convertAmount(amount) {
//     return amount * 1.2;
//   }
// }

// class OtherPaymentSystem {
//   submit(amount) {
//     console.log(`Submitting payment request: $${amount}`)
//   }
// }

// class PaymentAdapter {
//   constructor(paymentSystem) {
//     this.paymentSystem = paymentSystem;
//   }
  
//   makePayment(amount) {
//     const convertedAmount = this.convertAmount(amount);
//     this.paymentSystem.submit(convertedAmount);
//   }

//   convertAmount(amount) {
//     return amount * 1.2
//   }
// }

// class Order {
//   constructor(amount) {
//     this.amount = amount;

//     if(amount < 100) {
//       this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
//     } else {
//       this.paymentSystem = new ElectronicPaymentSystem();
//     }
//   }

//   makePayment() {
//     return this.paymentSystem.makePayment(this.amount)
//   }
// }

// const order1 = new Order(1000);
// order1.makePayment()

// const order2 = new Order(10);
// order2.makePayment()

// ==============

// class ShoppingCart {
//   constructor(discountStrategy) {
//     this.discountStrategy = discountStrategy;
//     this.items = [];
//   }

//   addItem(item) {
//     this.items.push(item)
//   }

//   calculateTotalPrice() {
//     const price =  this.items.reduce((acc, item) => acc + item.price, 0);
//     return this.discountStrategy.calculateDiscount(price);
//   }
// }

// class DiscountStrategy {
//   calculateDiscount(price) {
//     return price;
//   }
// }

// class RegularDiscountStrategy extends DiscountStrategy {
//   calculateDiscount(price) {
//     return price / 1.1;
//   }
// }

// class PremiumDiscountStrategy extends DiscountStrategy {
//   calculateDiscount(price) {
//     return price / 1.2;
//   }
// }

// class NewCustomerDiscountStrategy extends DiscountStrategy {
//   calculateDiscount(price) {
//     return price / 1.05;
//   }
// }

// const shoppingCart1 = new ShoppingCart(new RegularDiscountStrategy());

// shoppingCart1.addItem({ name: "Product 1", price: 100 });
// shoppingCart1.addItem({ name: "Product 2", price: 50 });

// console.log(shoppingCart1.calculateTotalPrice());

// ===============

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// class UserGroup {
//   users = [];

//   addUser(user) {
//     this.users.push(user)
//   }
// }

// class UserIterator {
//   #users = null;
//   #currentIndex = 0
//   constructor(userGroup) {
//     this.#users = userGroup.users
//   }

//   #hasNext() {
//     return this.#currentIndex < this.#users.length;
//   }

//   next() {
//     if(this.#hasNext()) {
//       const name = this.#users[this.#currentIndex].name;
//       this.#currentIndex++;
//       return name;
//     }
//     return null;
//   }

//   list() {
//     return this.#users.map((user) => user.name).join(", ")
//   }
// } 

// const group = new UserGroup();

// group.addUser(new User("John", "john@email.com", "password1"));
// group.addUser(new User("Jane", "joane@email.com", "password2"));

// console.log(group)

// //

// const iterator = new UserIterator(group);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.list());

// ==================

// class User {
//   constructor(name, chat) {
//     this.name = name;
//     this.chat = chat;
//   }

//   sendMessage(message) {
//     console.log(`${this.name} відправив повідомлення ${message}`);
//     return this.chat.sendMessage(this, message);
//   }

//   receiveMessage(user, message) {
//     console.log(`${this.name} отримав повідомлення від ${user.name}: ${message}`);
//   }
// }

// class Chat {
//   users = [];

//   addUser(user) {
//     this.users.push(user);
//   }

//   sendMessage(sender, message) {
//     for(const user of this.users) {
//       if(user !== sender) {
//         user.receiveMessage(sender, message);
//       }
//     }
//   }
// }

// const chatMediator = new Chat();

// const user1 = new User("John", chatMediator);
// const user2 = new User("Jane", chatMediator);
// const user3 = new User("Jakob", chatMediator);

// chatMediator.addUser(user1);
// chatMediator.addUser(user2);
// chatMediator.addUser(user3);

// user1.sendMessage("привіт")

// ==============