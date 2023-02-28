console.log('loops');


const arr=[22,33,11,55,44,77];
arr.forEach(function(element){console.log(element)});

arr.forEach(function(element,index,array){
    console.log(element,index,array);
})

arr.forEach(function(element,index){
    console.log(element,index)
})

console.log('///////////////////////')

for(var i=0;i<=arr.length;i++)
{
    console.log(arr[i]);
}

var myobj={Name:'Manohar',
           Age:24,
           Designation:'Devlopers'};

           for(var key in myobj)
           {
            console.log( `the ${key} of object is ${myobj[key]}`)
           }
     