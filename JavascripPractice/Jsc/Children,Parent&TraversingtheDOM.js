console.log('Children,Parent&TraversingtheDOM');

let elems=document.querySelector('.container');
//console.log(elems);
//elems=elems.childNodes;//its shows text comment etc;
//console.log(elems);

//elems=elems.children; //its shows only elements,like div, li, ui ,form etc.
//console.log(elems);


//let nodeName=elems.childNodes[5].nodeName;

//console.log(nodeName)

let nodeType=elems.childNodes[5].nodeType;

//console.log(nodeType);

//*Node Types//
//1. Elements
//2. Atribute
//3. Text Node
//8. comment
//9. document
//10. docType

let container=document.querySelector('div.container');

//console.log(container);

//container=container.children[0].children[1];
//console.log(container);
//console.log(container.firstChild)//its gives fist child of container it would be text comment anything

//console.log(container.firstElementChild);//its return only first element child

//console.log(container.lastElementChild);//its return only last element child

//console.log(container.childElementCount); //Count child elements

//console.log(container.firstElementChild.parentNode);

//console.log(container.firstElementChild.nextElementSibling);//its return the next element of container after first elementchile


//console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);//and next










