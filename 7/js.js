//Task 1
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const displayNone = (idElement) =>{document.getElementById(idElement).style.display = "none";}

//Task 2
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// const checkAge = () =>{
//     let years = document.getElementById('inputOld').value;
//     if(years >= 18){
//         alert('Welcome вам більше 18 років')
//     }else if(years <18){
//         alert('Come later вам ще не виповнилось 18')
//     }
// }

//Task 3
//Создайте меню, которое раскрывается/сворачивается при клике
const myDropFunc = () => {document.getElementById("myDrop").classList.toggle("show");};
window.onclick = function(event) {
  if (!event.target.matches('.dropBtn')) {
    const dropdowns = document.getElementsByClassName("dropList");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
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



