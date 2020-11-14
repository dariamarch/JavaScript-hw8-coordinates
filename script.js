
    // Создайте h2 c текстом "События"
    // Создайте блок div размером 400px на 400px
    // Создайте над блоком текст с отображением координат по примеру X: 150 Y: 120
    // Добавьте внизу блока еще один текст с содержанием "Координаты внутри блока: х 180, у 200"
    // При движении мышки над блоком должны обновляться данные о расположении курсора и отображаться
    // координаты в тексте над блоком соответственно осям х и у по отношению к странице
    // Внизу должны отображаться текущие координаты по x и y, но по отношению блока

"use strict" 

let h2 = document.createElement('h2');
 h2.innerText = 'События';
 document.body.append(h2);

 let p = document.createElement('p');
 document.body.append(p);

 let div = document.createElement('div');
 document.body.append(div);
 div.style.width = '400px';
 div.style.height = '400px';
 div.style.border = '1px solid red';

 let p2 = document.createElement('p');
 document.body.append(p2); 

const block = document.querySelector('div');
const html = document.querySelector('html');

html.addEventListener('mousemove', function(event) {
	p.innerText = "X " + event.clientX + ' : Y ' + event.clientY;    
});

block.addEventListener('mousemove', function(event) {
    let target = this.getBoundingClientRect();
	let x2 = event.clientX - target.left;
    let y2 = event.clientY - target.top;
    p2.innerText = "Координаты внутри блока : X " + x2.toFixed(2) + ' : Y ' + y2.toFixed(2);  
});