//Task 1
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const displayNone = (idElement) =>{document.getElementById(idElement).style.display = "none";};

//Task 2
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
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
            btnMore.setAttribute('onclick',showMore(`btnmore${id}`,`revbody${id}`,`btnless${id}`));
            frame.appendChild(btnMore);
            revBody.innerText = body;
            revBody.setAttribute('id',`revbody${id}`);
            revBody.style.display ='none';
            frame.appendChild(revBody);
            btnLess.innerText = 'Less';
            btnLess.setAttribute('id',`btnless${id}`);
            btnLess.style.display ='none';
            btnLess.onclick = showLess(`btnmore${id}`,`revbody${id}`,`btnless${id}`);
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
function showMore (btnmore,revbody,btnless){
    document.getElementById(revbody).style.display = 'block';
    document.getElementById(btnless).style.display = 'block';
    const redMorre = document.getElementById(btnmore);
    redMorre.style.display ='none';
}
showLess = (btnmore,revbody,btnless) =>{
    const redMoree = document.getElementById(btnmore);
    redMoree.style.display ='block';
    document.getElementById(revbody).style.display = 'none';
    document.getElementById(btnless).style.display = 'none';
};