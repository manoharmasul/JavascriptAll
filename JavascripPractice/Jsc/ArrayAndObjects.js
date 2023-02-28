console.log("Array And Objects");

const marks=[9,23,44,66,34,2]; //array
const fruits=['pineapple','banana','apple']; 

console.log(marks);
console.log(fruits);

const mixarry=['max',77,44,66,75,12,[3,2,6]];//mix array
console.log(mixarry);

console.log(marks.length);//6
console.log(mixarry.length);//7
console.log(mixarry.indexOf(44));

marks.push(701);  //add 701 at the end

//console.log(marks);  

marks.unshift(501);

//console.log(marks);

marks.pop(); //remove element from last

//console.log(marks);

marks.shift(); //remove element from start

//console.log(marks);
///console.log(marks);

marks.splice(1,2);   //remove 2 elements from index 1

//console.log(marks);
marks.reverse();   //reverse array

//console.log(marks);

let marks2=[35,33,45,56,32];

marks2=marks.concat(marks2);

console.log(marks2);

console.log('///////////////////////////////////////////////////////');

let myobj={'first name': 'Harry',
 channel : 'Code With Harry',
 marks:[1,2,3,4,5,6]
};

console.log(myobj);




