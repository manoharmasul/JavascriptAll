console.log('Date Object: Date & Time');

let today=new Date();
//console.log(today); its return todays date times
//console.log(typeof today); //its return object

let otherdate =new Date('8-4-2003 04:54:08');

//console.log(otherdate);

otherdate =new Date('June 13 1976');
//console.log(otherdate); //return date

//formate (mm/dd/yy)
otherdate =new Date('09/13/200');
//console.log(otherdate);

//otherdate =new Date('13/09/200');
//console.log(otherdate);//invalid date because invalid input formate

let a;
a=otherdate.getDay();//0s 1m 2t 3t 4w 5f,s6 //retuns day
//console.log(a);

a=otherdate.getDate();

//console.log(a); //returns date

a=today.getMinutes();//returns minutes

//console.log(a);

a=today.getSeconds();//returns seconds

//console.log(a);

a=today.getMilliseconds();//returns miliseconds

//console.log(a);

a=today.getMonth();//returns 0j,1f,2m.....d11;

//console.log(a);

//a=otherdate.getDate();

//console.log(a);

otherdate.setDate(12); //set new date

//a=otherdate.getDate();

//console.log(a);

//you can set 

otherdate.setFullYear(1985);
otherdate.setMonth(5);
otherdate.setMinutes(1);
otherdate.setHours(2)
otherdate.setSeconds(55);

//console.log(otherdate);







