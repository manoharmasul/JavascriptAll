console.log("wecome to my app");

showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {

    let addText = document.getElementById('addText');

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = "";
    showNotes();
})

//function to show element from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">           
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
  else
  {
    notesElm.innerHTML=`Nothing to show please add new notes`
  }
}


//function to delete note

function deleteNotes(index){
    console.log('I Am Deleteting',index);
    let notes=localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById('searchTxt');

search.addEventListener('input',function(){

    let inputval=search.value;

    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;

        if(cardTxt.includes(inputval))
        {
            element.style.display='block'
        }
        else
        {
            element.style.display='none'
        }
    })
})