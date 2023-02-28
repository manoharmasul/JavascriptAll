console.log("welcome to Local & Session storage in JavaScript");

//local storage :- In Js You can store some values and You can read letter

//Session Storege:-Its valid only for session 


//Ex. Local Storage

//localStorage.setItem('Name','Manohar');
//localStorage.setItem("Name2","Rusi");

//console.log(window.localStorage);

//let name=localStorage.getItem('Name2');
//console.log(name);


//clear local storage 

//localStorage.removeItem('Name') ;//remove single item

//console.log(localStorage.getItem('Name'))

//console.log(localStorage.getItem('Name2'))

//localStorage.clear();//remove all items

//console.log(localStorage.getItem('Name'))

//console.log(localStorage.getItem('Name2'))

//console.log('check///////');

//let name2=localStorage.getItem('Name2');

//console.log(name2);

//You not add arrays into local storage directly 



//How To Overcome


/*let imparray=['adark','pyaj','bhindi'];
localStorage.setItem('subji',imparray);//its stores aray as string

console.log(localStorage.getItem('subji')); */


//We can Use JSON.stringifyimparray and JSON.Parts


//let imparray=['adark','pyaj','bhindi'];
//localStorage.setItem('subji',JSON.stringify(imparray));//its stores aray as string

//console.log(localStorage.getItem('subji'));//its look like array but its string

//convert it into array 

//let subljiss=JSON.parse(localStorage.getItem('subji'));
//console.log(subljiss);//ites reaturn array

//console.log(isArr(subljiss));


//JSON.stringify its take agrument object and returns string

//JSON.parse its take string and returns object


//Session Storage

//sessionStorage.setItem('ssName','Manohar');
//sessionStorage.setItem("ssName2","Rusi");

//console.log(sessionStorage.getItem('ssName'));

//session storage and local storage same 

//session storage clear after closing page //but local not


