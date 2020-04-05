// task 1
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let human1 = [
//     {type : 'human', race :'chines', vik : 23, vaga : 70, stat : 'men', stan : 'marid'},
//     {type : 'car', marka : 'mercedes', kolir : 'black', paluvo : 'benzin', pruvid : '4x4', kuzov : 'jeep'},
//     {type : 'apartment', area : 47, flor : 3, rooms : 2, bedroom :1, balkon : true},
//     {type :'dog', poroda : 'dvornyaga', kolir : 'Jovtuy', vik : 2, vaga : 10, hvist : true},
//     {type :'book', autor : 'tolkien', pages : 983, janr : 'fentasy', tom : 1, rikVupysky : 2020}];

// task 2
//создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример :
// let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let user1 = [
//     {name : 'misko', valu1 : ['mp5','ar15'], valu2:{marca:'mers', rik: 2010}},
//     {name : 'petro', valu3 : ['mp5','ar15'], valu4:{marca:'mers', rik: 2010}},
//     {name : 'andriy', valu5 : ['mp5','ar15'], valu6 :{marca:'mers', rik: 2010}},
//     {name : 'yra', valu7 : ['mp5','ar15'], valu8 :{marca:'mers', rik: 2010}},
//     {name : 'anton', valu9 : ['mp5','ar15'], valu10 :{marca:'mers', rik: 2010}}
//     ];

//task 3
//При помощи for in вывести все ключи всех объектов из задания 1 и 2
// let arr = [human1, user1];
// for (const key in arr) {
//     console.log(arr[key]);
// }

//task 4
//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let arr = [human1, user1];
// for (const element of arr){
//     console.log(element);
//     console.log(Object.keys(element));
//     for (const arrKey in element) {
//         let xxx = Object.keys(arrKey);
//         console.log(element[arrKey]);
//     }
// }

//task 5
//Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let cars = [
//     {model:'bmw', year: 2020, might: 3.7, color:'black'},
//     {model:'mers', year: 2016, might: 4.7, color:'dytjk'},
//     {model:'jugyl', year: 2013, might: 6.7, color:'chgj'},
//     {model:'lada', year: 2017, might: 8.7, color:'black'},
//     {model:'humer', year: 2010, might: 5.7, color:'bsfghjck'},
//     {model:'audi', year: 2013, might: 2.6, color:'bsfghck'},
//     {model:'ford', year: 2026, might: 2.8, color:'cghkjck'},
//     {model:'zapor', year: 2050, might: 6.7, color:'gjk.ck'},
//     {model:'mazda', year: 2070, might: 8.7, color:'bgjklk'},
//     {model:'jack', year: 2030, might: 1.7, color:'azerytk'}];

//task 6
//Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
//(Значаения полей могу быть выдуманными)
// let cities = [
//     {name:'london', polutaion:20000, country: 'GB', region: 'east'},
//     {name:'sfrjh', polutaion:26510, country: 'df', region: 'dtyn'},
//     {name:'szfdgh', polutaion:9684, country: 're', region: 'aer'},
//     {name:'xfgjh', polutaion:65198, country: 'bfdt', region: 'jty'},
//     {name:'djtyn', polutaion:19865, country: 'xfd', region: 'ary'},
//     {name:'djyt', polutaion:961849, country: 'nh', region: 'nddt'},
//     {name:'djyt', polutaion:6555654, country: 'dtgyj', region: 'edtuyj'},
//     {name:'ae4t', polutaion:1984651, country: 'e5ar', region: 'jyetd'},
//     {name:'ndty', polutaion:96194865, country: 'nhgd', region: 'aret'}
// ];

//task 7
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let rentCar = [
//     {model:'rag', year:2101, might:2.45, color:'red', driver:{name:'jon', years:32, sex: 'man', staj:12},},
//     {model:'sfhn', year :6511, might:6.45, color:'satyh', driver:{name:'piter', years:33, sex: 'man', staj:21}, },
//     {model:'zdfg', year :2334, might:5.45, color:'srth', driver:{name:'mihal', years:34, sex: 'man', staj:15}, },
//     {model:'dtyjg', year :234, might:7.45, color:'duud', driver:{name:'arg', years:36, sex: 'whoman', staj:19} },
//     {model:'aag', year :1234, might:2.45, color:'hdgmn', driver:{name:'vas', years:45, sex: 'man', staj:15} },
//     {model:'rae', year :34435, might:3.45, color:'dgh', driver:{name:'srth', years:65, sex: 'whoman', staj:32} },
//     {model:'aer', year :32145, might:5.45, color:'dsry', driver:{name:'petya', years:23, sex: 'man', staj:17} },
//     {model:'rgare', year :1345, might:7.45, color:'djyt', driver:{name:'rty', years:45, sex: 'whoman', staj:17} },
//     {model:'raer', year :2423, might:9.45, color:'dytr', driver:{name:'wt4ry', years:37, sex: 'man', staj:12} }
// ];

//task 8
//проитерировать каждый массив из задания 5,6,7 при помощи while.
// rentCar cities cars
// let step = 0;
// while (step<cars.length){
//     console.log(cars[step]);
//     step++
// };
//
// let step1 = 0;
// while (step1<cities.length){
//     console.log(cities[step1]);
//     step1++;
// };
//
// let step2 = 0;
// while (step2<rentCar.length){
//     console.log(rentCar[step2]);
//     step2++;
// };
//------------------

//task 9
//проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let step = 0;step<cars.length;step++){
//     console.log(cars[step]);
// };
// for (let step1 = 0;step1< cities.length;step1++){
//     console.log(cities[step1]);
// };
// for (let step2 = 0;step2<rentCar.length;step2++){
//     console.log(rentCar[step2]);
// };
//--------------

//task 10
//проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const step of cars) {
//     console.log(step);
// }
// for (const city of cities) {
//     console.log(city);
// }
// for (const rentCarElement of rentCar) {
//     console.log(rentCarElement);
// }
//-----------------

//task 11
// взять объекты из задания 1 и превратить каждый в json.
// let humArr = JSON.stringify(human1);
//--------------------

//task 12
//взять json из задания 11 и превратить их обратно в объекты.
// JSON.parse(humArr);
//----------------------

//task 13
//взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (const car of cars) {
//     JSON.stringify(car);
// }
//--------------

//task 14
//взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const citi of cities) {
//     JSON.stringify(citi);
// }

//task 15
//взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArr = [];
// for (const rentCarElement of rentCar) {
//     let string = JSON.stringify(rentCarElement);
//     newArr.push(string);
// }

//task 16
//Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {name:'rag', year:2101, exp:2.45, education:'red', skills:['js','css','sass','java'] },
//     {name:'sfhn', year :6511, exp:6.45, education:'satyh', skills:['js','css','sass','c'] },
//     {name:'zdfg', year :2334, exp:5.45, education:'srth', skills:['js','css','sass','fd'] },
//     {name:'dtyjg', year :234, exp:7.45, education:'duud', skills:['js','css','sass','java'] },
//     {name:'aag', year :1234, exp:2.45, education:'hdgmn', skills:['js','css','sass','java'] },
//     {name:'rae', year :34435, exp:3.45, education:'dgh', skills:['js','css','sass','java'] },
//     {name:'aer', year :32145, exp:5.45, education:'dsry', skills:['js','css','sass','java'] },
//     {name:'rgare', year :1345, exp:7.45, education:'djyt', skills:['js','css','sass','java'] },
//     {name:'raer', year :2423, exp:9.45, education:'dytr', skills:['js','css','sass','java'] }
// ];
// for (const user of users) {
//     console.log(user);
//         for (const userElement of user.skills) {
//             console.log(userElement);
//         }
// }

//task 17
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     {name:'rag', year:2101, exp:2.45, education:'red', skills:['js','css','sass','java'] },
//     {name:'sfhn', year :6511, exp:6.45, education:'satyh', skills:['js','css','sass','c'] },
//     {name:'zdfg', year :2334, exp:5.45, education:'srth', skills:['js','css','sass','fd'] },
//     {name:'dtyjg', year :234, exp:7.45, education:'duud', skills:['js','css','sass','java'] },
//     {name:'aag', year :1234, exp:2.45, education:'hdgmn', skills:['js','css','sass','java'] },
//     {name:'rae', year :34435, exp:3.45, education:'dgh', skills:['js','css','sass','java'] },
//     {name:'aer', year :32145, exp:5.45, education:'dsry', skills:['js','css','sass','java'] },
//     {name:'rgare', year :1345, exp:7.45, education:'djyt', skills:['js','css','sass','java'] },
//     {name:'raer', year :2423, exp:9.45, education:'dytr', skills:['js','css','sass','java'] }
// ];
// let newArr1 = [];
// for (const user of users) {
//     console.log(user);
//         for (const userElement of user.skills) {
//             console.log(userElement);
//             newArr1.push(userElement);
//         }
// }
// console.log(newArr1);





