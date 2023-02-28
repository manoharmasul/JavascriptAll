console.log('HTMLElementSelectorsInJavaScript')

let element=document.getElementById('first');//select the element of id=first

//element=element.style.color='red';  //chage the color of elemennt of id first

//element=element.className;
//console.log(element)


//console.log(a);

//a=document.getElementsByClassName()

//There Are Two Types Of Element Selectors

/*

1) Single Element Selector

2) Multiple Element Selector

*/

//Single element selector

 element=document.getElementById('first');
console.log(element);

//element=element.className;


//console.log(element);

//element=element.style.color='red';
//element=element.childNodes;
//console.log(element);

//element=element.parentNode;

element=document.getElementById('first');
console.log(element);

//element=element.childNodes;

//console.log(element);

//element=element.parentNode;

//console.log(element);

//element.style.color='green';

//element=element.innerTex='Manohar Is Good Boy';


//query selector

//element=document.querySelector('#first');

element=document.querySelector('.child') //return the first element whose class name is child;
//console.log(element);


//2) multi element selector

//element=document.getElementsByClassName('child red');//returns the elements whose class name is child

//console.log(element);

element=document.getElementsByTagName('div');

console.log(element);



