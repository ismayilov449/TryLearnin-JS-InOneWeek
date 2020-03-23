let val;

// val = document.getElementById('Header');
// val = document.getElementById('Header').id;
// val = document.getElementById('Header').className;

// val = document.getElementById('Header');
// val = val.id;

// val.style.fontSize = '45px';
// val.style.color = 'red';
// val.style.fontWeight = 'bold';
// console.log(val);

// val = document.getElementById('Header').innerHTML = '<b>AUE</b>';

// val = document.querySelector('#Header');
// console.log(val);

// document.querySelector('li').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'blue';



// val = document.getElementsByClassName('my-class');
// // val = document.getElementsByClassName('my-class')[1];


// for (let i = 0; i < val.length; i++) {
// console.log(val[i].style.color = 'red');
// console.log(val[i].textContent = 'blue');
// console.log(val[i].style.fontSize = '50px');

// }


// val = document.getElementsByTagName('li');

// val = document.querySelectorAll('li');
// val.forEach(function(item,index){

// item.textContent = `${index} - hello`;

// });

// val = document.querySelectorAll('li:nth-child(odd)');
// val.forEach(function(item,index){

// item.textContent = `${index} - hello`;

// });

// console.log(val);

// let list = document.querySelector('.my-ul');

// val = list;

// val = list.childNodes;

// console.log(val);


// const li = document.createElement('li');

// li.className = 'my-class';

// li.setAttribute('title','Wooow');

// const text = document.createTextNode('new item');
// li.appendChild(text);

// const a = document.createElement('a');
// a.setAttribute('href',"#");

// a.innerText = ('Wooowwwww');

// li.appendChild(a);

// document.querySelector('ul').appendChild(li);
// console.log(li);

const taskList = document.querySelector('ul');

//taskList.childNodes[3].remove();

//taskList.children[0].remove();

//taskList.removeChild(taskList.children[1]);

// taskList.children[0].removeAttribute('class');

// const ul = document.querySelector('.my-class1');

// const h2 = document.createElement('h2');
// h2.appendChild(document.createTextNode('awwww'));

// const parent = document.querySelector('ul');

// parent.replaceChild(h2,ul);

// val = taskList[0];

//const btn = document.querySelector('.my');

// btn.addEventListener('click',function(){
//     console.log('btn clicked')
// })

// function btnClick(e) {
//     console.log('clickkk');
//     e.preventDefault();
// }

// btn.addEventListener('mouseover', btnClick);

// const input = document.querySelector('#txtTaskName');

// console.log(input);

// // input.addEventListener('keydown',eventHandler);
// // input.addEventListener('keyup',eventHandler);
// //input.addEventListener('keypress',eventHandler);
//  input.addEventListener('focus',eventHandler);
//  input.addEventListener('blur',eventHandler);




// function eventHandler(e){
//     console.log('event type '+e.type);
//     // console.log('key code '+e.keyCode);
//     console.log('value :'+e.target.value);
//     e.target.style.backgroundColor = 'yellow';
// }


// const form = document.querySelector('#addTaskForm');
// const li = document.querySelector('.my');
// const ul = document.querySelector('.my-ul');

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// })

// li.addEventListener('click',function(e){
//     console.log('my li');
//     e.stopPropagation();
// })

// ul.addEventListener('click',function(e){
//     console.log('my ul');
//     e.stopPropagation();
// })

// const form = document.querySelector('#addTaskForm');
// const li = document.querySelector('.my');
// const ul = document.querySelector('.my-ul');

// form.addEventListener('click',function(e){
//     console.log('form');
     
// },true)

// li.addEventListener('click',function(e){
//     console.log('my li');
     
// },true)

// ul.addEventListener('click',function(e){
//     console.log('my ul');
     
// },true)


// //Local Storage
// const firstname = localStorage.setItem('firstname','Rufat');
// const lastname = localStorage.setItem('lastname','Ismayilov');
// console.log(localStorage);


// //Session storage
// const firstname1 = sessionStorage.setItem('firstname','Rufat');
// const lastname1 = sessionStorage.setItem('lastname','Ismayilov');
// console.log(sessionStorage);

const hobbies = ['Programming','Football','Books'];

localStorage.setItem('hobbies',JSON.stringify(hobbies));
val = JSON.parse(localStorage.getItem('hobbies'));

console.log(val);
console.log(localStorage);