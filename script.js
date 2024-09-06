'use strict';
let modal=document.querySelector(".modal");
let blurwindow = document.querySelector(".overlay");
let closebtns = document.querySelector(".close-modal");
function closing(){
    modal.classList.add("hidden");
    blurwindow.classList.add('hidden');
}
function opening(){
    modal.classList.remove("hidden");
    blurwindow.classList.remove("hidden");
}


let showbtns = document.querySelectorAll(".show-modal");

for(let i=0;i<showbtns.length;i++){
    showbtns[i].addEventListener('click',
        function(event){
        opening();
        });
}

closebtns.addEventListener('click',
    function(event){
        closing();
    });
blurwindow.addEventListener('click',
    function(){
        closing();
    }
);
//KeyBoardEvents
document.addEventListener('keydown' ,
    function(ev){
        console.log(ev);
        if (ev.key==='Escape'){
            closing();
        }
        else if(ev.key==='Delete'){
            closing();
        }
});
