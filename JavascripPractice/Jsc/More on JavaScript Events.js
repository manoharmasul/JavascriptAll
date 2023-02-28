console.log('More on JavaScript Events');

let btn=document.getElementById('btn');

btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);


function func1(e)
{
    //console.log("thanks",e);
   e.preventDefault();  //it is used for to avaid default behaviour 
}


//double click 
function func2(e)
{
    console.log("thanks its double click",e);
   e.preventDefault();  //it is used for to avaid default behaviour 
}

function func3(e)
{
    console.log("thanks its mousedown ",e);
   e.preventDefault();  //it is used for to avaid default behaviour 
}

//mouse enter and mouse leave event

/*document.querySelector(".child").addEventListener('mouseenter',function(){
console.log('you entered child');
})

document.querySelector(".child").addEventListener('mouseleave',function(){
    console.log('you leaved child');
})*/

document.querySelector(".child").addEventListener('mousemove',function(){
    console.log('you triggerd mouse move event');
})


    


