showHide = (idBtn,idBlock) =>{
  let btn = document.getElementById(idBtn),
      block = document.getElementById(idBlock);
    if(block.style.display ==='block'){
        block.style.display = 'none';
        btn.innerText = 'Show result';
    }else{
        block.style.display = 'block';
        btn.innerText = 'Hide result';
    }
};

//Task 1
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const displayNone = (idElement) =>{document.getElementById(idElement).style.display = "none";};

//Task 2
// //- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// // та повідомити про це користувача
const checkAge = () =>{
    let years = document.getElementById('inputOld').value;
    if(years >= 18){
        alert('Welcome вам більше 18 років');
    }else if(years <18){
        alert('Come later вам ще не виповнилось 18');
    }
};

//Task 3
//Создайте меню, которое раскрывается/сворачивается при клике
const myDropFunc = () => {document.getElementById("myDrop").classList.toggle("show");};
window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    const dropDowns = document.getElementsByClassName("dropList");
    for (let i = 0; i < dropDowns.length; i++) {
      const openDropdown = dropDowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Task 4
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((revius) => {return revius.json()})
    .then(reviusJSON => {
        const bodyRevu= document.getElementById('reviusBlock');
        for (const reviu of reviusJSON) {
            const {title, body,id} = reviu;
            const frame = document.createElement('div'),
                revTitle = document.createElement('h3'),
                btnMore = document.createElement('button'),
                revBody = document.createElement('p'),
                btnLess = document.createElement('button');
            revTitle.innerText = title;
            revTitle.style.textAlign='center';
            frame.appendChild(revTitle);
            btnMore.innerText = 'Read more';
            btnMore.setAttribute('id',`btnmore${id}`);
            btnMore.setAttribute('onclick','showMore('+`btnmore${id},`+`revbody${id},`+`btnless${id})`);
            frame.appendChild(btnMore);
            revBody.innerText = body;
            revBody.setAttribute('id',`revbody${id}`);
            revBody.style.display ='none';
            frame.appendChild(revBody);
            btnLess.innerText = 'Less';
            btnLess.setAttribute('id',`btnless${id}`);
            btnLess.style.display ='none';
            btnLess.setAttribute('onclick', 'showLess('+`btnmore${id},`+`revbody${id},`+`btnless${id})`);
            frame.appendChild(btnLess);
            frame.style.width = '300px';
            frame.style.margin ='20px';
            frame.style.padding = '15px';
            frame.style.borderColor = 'black';
            frame.style.borderStyle = 'solid';
            frame.style.borderWidth = '2px';
            bodyRevu.appendChild(frame);

        }
    });
showMore = (btnmore,revbody,btnless) =>{
    revbody.style.display = 'block';
    btnless.style.display = 'block';
    btnmore.style.display ='none';
};
showLess = (btnmore,revbody,btnless) =>{
    btnmore.style.display ='block';
    revbody.style.display = 'none';
    btnless.style.display = 'none';
};

// Task 5
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
function getInfo1(){
 let someForm = document.forms.form1,
     field1 = someForm.text1,
     field2 = someForm.text2;
   console.log(field1.value,field2.value);
}
function getInfo2(){
 let someForm = document.forms.form2,
     field3 = someForm.text3,
     field4 = someForm.text4;
   console.log(field3.value,field4.value);
}

// Task 6
// Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
tableCreate = (trValue,tdValue,idElementInsert) =>{
    let idElementval = document.getElementById(idElementInsert).value,
        tableContainer = document.getElementById(idElementval),
        trvaLue = document.getElementById(tdValue).value,
        tdvaLue = document.getElementById(tdValue).value,
        tableBody = document.createElement('table');
    for (let i = 0; i < trvaLue; i++) {
        let trElement = document.createElement('tr');
        for (let j = 0; j < tdvaLue; j++) {
            let tdElement = document.createElement('td');
            tdElement.innerText = 'test text';
            trElement.appendChild(tdElement);
        }
        tableBody.appendChild(trElement);
    }
    tableContainer.appendChild(tableBody);
};

// Task 7
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let formBlock = document.createElement('div');
    formBlock.className = 'form';
    document.getElementById('resultBlock2').appendChild(formBlock);
    let newForm = document.createElement('form');
    newForm.appendChild(document.createElement("label"));
    newForm.appendChild(document.createElement('br'));
    newForm.appendChild(document.createElement('input'))
formBlock.appendChild(newForm);

// Task 8
// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let imgArr = [
    {id:1,
    url: 'https://meblimarko.com/wp-content/uploads/2020/04/DSC_0242-HDR.jpg'},
    {id:2,
    url: 'https://meblimarko.com/wp-content/uploads/2020/03/DSC_0219.jpg'},
    {id:3,
    url: 'https://meblimarko.com/wp-content/uploads/2020/03/DSC_0193.jpg'},
    {id:4,
    url: 'https://meblimarko.com/wp-content/uploads/2020/03/DSC_0606-min.jpg'}
];
const imageSlider = document.getElementById('imageBlock'),
    btnPerv = document.getElementById('previus'),
    btnNext = document.getElementById('next');
let curenImg = 0;
imageSlider.src = imgArr[curenImg].url;
btnPerv.onclick = () =>{
    curenImg - 1 < 0
    ? curenImg = imgArr.length - 1
    : curenImg = curenImg - 1
    imageSlider.src = imgArr[curenImg].url
}
btnNext.onclick = () =>{
    curenImg + 1 < imgArr.length - 1
    ? curenImg = 0
    : curenImg = curenImg + 1
    imageSlider.src = imgArr[curenImg].url
}

// Task 9
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let masCenz = ['fuck', 'sheat'];
checkCenzor = () =>{

}

