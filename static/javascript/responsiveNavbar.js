document.addEventListener('DOMContentLoaded', function() {
    let menu=document.getElementById('menu')
    let navbar=document.getElementById('navbar')
    let overlay=document.getElementById("overlay")

    // for opening and closing the navigation menu
    menu.addEventListener('click',function(){
      navbar.classList.toggle('open-navbar')
      overlay.classList.toggle('show-overlay')
    })
});