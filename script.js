let menu = document.querySelector('#menu-bar')
let navMenu = document.querySelector('.nav-menu')
let icon = document.querySelector('.fa-equals')

menu.onclick = () =>{
   if( menu.classList.contains("fa-equals")){
    icon.classList.replace("fa-equals","fa-times")
   }else{
    icon.classList.replace("fa-times","fa-equals")
   }
   navMenu.classList.toggle('active')
   
}
window.onscroll = () =>{
    navMenu.classList.remove('active')
}
