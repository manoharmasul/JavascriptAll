console.log('Math Object In JavaScript');

let x=3;
let y=6;
let z;

z=x+y;
//console.log(z);
z=x-y;
//console.log(z);
z=x*y;
//console.log(z);
z=x/y;
//console.log(z);

//exploring the math object

z=Math;

z=Math.PI
//console.log(z);
z=Math.E;
//console.log(z);

z=Math.round(5.6);//up .4 its returns 5 and from .5 to .9 its returns 6
//console.log(z);

//for gettion greater rounding value use ceil
z=Math.ceil(4.1);
//console.log(z);

z=Math.floor(4.3)//its remove point and return smaller values

//console.log(z);

z=Math.floor(-4.3) //its return -5
//console.log(z);

z=Math.abs(-5.8);//its return + value
//console.log(z);
z=Math.abs(-5);
//console.log(z);
z=Math.abs(5);
//console.log(z);

z=Math.sqrt(49) //its return spuare root 
//console.log(z);

z=Math.pow(2,3)//its return power 2^3
//console.log(z);
z=Math.max(7,2,4,9,6,8);//return max value
//console.log(z);

z=Math.min(7,2,4,9,6,8);//returns minimum value
//console.log(z);

z=Math.random();//its generates random not beetween 0 to 1
//for geting value 0 to 100


//ex a=(0,1) //a100=a*100=(0,100) //a10_100=10+a*(100-10)

z=100*Math.random();
//console.log(z);

z=Math.ceil(50+(100-50)*Math.random());
console.log(z);




