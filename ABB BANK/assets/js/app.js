var axtaris=document.querySelector('.axtaris');
var second=document.querySelector('.second');
var remove=document.querySelector('.remove');
var lang=document.querySelector('.lang');
var dpdown=document.querySelector('.dpdown')

axtaris.onclick=function(){
    second.classList.toggle('active')
}
remove.onclick=function(){
    second.classList.remove('active')

}

lang.onclick=function(){

    dpdown.classList.toggle('active')
}

var menu=document.querySelector('.bares');
var remover=document.querySelector('.remover')
var slide=document.querySelector('.menubar');

menu.onclick=function(){
    
    slide.style.width="50%"
    menu.style.display="none"
    remover.style.display="block"
    menu.classList.add('nonactive')
    remover.classList.add('active')
}

remover.onclick=function(){
    slide.style.width="0%"
    menu.style.display="block"
    menu.classList.remove('nonactive')
    remover.classList.remove('active')
}

// menu.onclick = function(){
//     slide.style.width='100%'
// }
