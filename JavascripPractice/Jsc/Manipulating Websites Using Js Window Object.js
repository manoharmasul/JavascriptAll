console.log('Manipulating Websites Using Js Window Object');

let a =window;  //window object is by default public
console.log(a);

//window.alert('Hello manya');
//alert('Hellow manohar');

//prompt gives you one prompt then what you write in prompt its stored in variable

//a=prompt('This Will Destroy Your Pc');
//console.log(a);

//a=confirm('Do You Want To Delete This Page');
//console.log(a);

let b=window.document;
console.log(b);

a=innerHeight;
let c=innerWidth;

console.log(a);
console.log(c);

let l=location;
console.log(l);

let ls=l.toString();

console.log(ls);

let h=window.history;
h1=window.history-1;

console.log(h);
console.log(window);

a=history(-1);
console.log(a);
