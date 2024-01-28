let search=document.querySelector('.search_box')
document.querySelector('#search_icon').onclick= ()=>{
   search.classList.toggle('active')
   manu.classList.remove('active')
  
}

let manu=document.querySelector('.navbar')
document.querySelector('#menu_icon').onclick= ()=>{
   manu.classList.toggle('active')
   search.classList.remove('active')
  
}
window.onscroll=()=>{
    manu.classList.remove('active')
    search.classList.remove('active')
    
}

let header=document.querySelector("header")
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0)
})