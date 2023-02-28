console.log('CreateRemoveReplaceElemnt');

//create element

let element=document.createElement('li');
//console.log(element);

//Add class name to the created element

element.className='food';

//Add Id To the created element
element.id='createdId1';


//console.log(element);



element.setAttribute('title','mytitle');

//element.innerText='Hello This Is Created By Manohar'

//for html style

element.innerHTML='<b>Hello This Is Created By Manohar</b>'
//console.log(element);

//insert created element into dom

//insted of innerText and innerHTML We Can also Use create text nod

let ul=document.querySelector('ul.foodlist');

ul.appendChild(element);

//insted of innerText and innerHTML We Can also Use create text nod

var element1 =document.createElement('li');
let text=document.createTextNode('I am text node');

console.log(element1)
element1.appendChild(text);

element1.className='food';

element1.id='cratedId2'

element1.setAttribute('title1','mytitle1');

ul.append(element1);

//Replace Element


let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';

let tnode=document.createTextNode('this is created text node from elem2')

elem2.appendChild(tnode);

element1.replaceWith(elem2);

//replache child

let myul=document.getElementById('fid');

myul.replaceChild(elem2,document.getElementById('fui'));

//Remove element 

myul.removeChild(document.getElementById('lui'));


//Get Atribute
let pr=elem2.getAttribute('id');
pr=elem2.hasAttribute('hrf')
elem2.removeAttribute('id');

//quick quiz
let harryelem=document.createElement('a');
let textn=document.createTextNode('Go To Code With Harry')

harryelem.append(textn);

console.log(harryelem);

harryelem.setAttribute('href',"//codewithharry.com")

var cont=document.querySelector('div.container');

cont.append(harryelem);










