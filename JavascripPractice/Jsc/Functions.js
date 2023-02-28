console.log('Functions in js')

function NameAndDesignation(name,designation)
{
    console.log(`The Employee Name ${name} and Designation ${designation}`);
}


let name='Manohar';
let designation='Developer'

NameAndDesignation(name,designation);

console.log('////////////////////////////////////////////////')
function functionwithreturn(name,designation)
{
    console.log(`functionwithreturn the name of emp ${name} designation ${designation}`)
    return 4;
}

console.log('////////////////////////////////////////////////')
functionwithreturn(name,designation)

let funcreturn=functionwithreturn(name,designation);


console.log(funcreturn)


//We Can Store The function in Variable

let mygreet=function greeting(sms,empname)
{
    console.log(`msg from stpl :${sms} dear ${empname}`);
}
let empname='manohar';
let sms='happy birthday'

let valfun=mygreet(sms,empname);

console.log(valfun);

let myobj={
             name:'manohar',
             game:function(){
                return 'GTA';
             }

          }
          console.log(myobj.game());

          var i=12;
          console.log(i);

function ui(name){
    var i=9; //limited scope
    console.log(i);
    return `This Is Name Of UI ${name}`;
}

console.log(ui('manohar'),i);

function ui1(name){
    i=10 ;//globle scope

    return `The Name of Game Is ${name}`;
}
console.log(ui1('GTA'),i);

function sumfun(num1,num2)
{
    return num1+num2;
}
let num1=1;
let num2 =3;
console.log(sumfun(num1,num2));


//if you want to skip the parameter that time set default value if you do dont set default that time its return usdefined

function funcwithdefault(name,thank='Thanks')
{
    console.log(`happy birthday ${name} wish you many many returns of the day ${thank}`)
}

console.log(funcwithdefault('manohar','Thanks a lot'));


function funcwithdefault1(name1,thank1='Thanks')
{
    console.log(`happy birthday ${name1} wish you many many returns of the day ${thank1}`)
}

console.log(funcwithdefault1('manohar'));


function funcstringreturn(name,ammount)
{
    let thanksmsg=console.log(`thanks you ${name} for donationg RS ${ammount} `);
    return thanksmsg;
}


funcstringreturn('manohar',100000);

//function in obj

const myobj1={
name:'manohar',
game:function()
{
    return 'GTA'
}
}

console.log(myobj1.game());