console.log('chech');

console.log('//////////////////////////////////////');

var elem=document.getElementById('productname').value;
console.log(elem)

function printfunc()
{
    var elemname=document.getElementById('productname').value;
    console.log(elemname+'  product name');

    var elemprice=document.getElementById('productprice').value;
    console.log(elemprice+'  price');
    var elemurl=document.getElementById('imgsid').value;
    console.log(elemurl);
    event.preventDefault();

}

function addfunc()
{

    if(elem=='1')
    {
        document.getElementById('imgsid').value=document.getElementById('urlsid').value;
        (document.getElementById('controlid')).value+='2';
    }
    else
    {
        document.getElementById('imgsid').value+=','+document.getElementById('urlsid').value;
    }

}