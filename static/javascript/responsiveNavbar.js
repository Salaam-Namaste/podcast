document.addEventListener('DOMContentLoaded', function() {
    let menuIcon=document.getElementById('menu')
    let navbar=document.getElementById('navbar')
    let overlay=document.getElementById("overlay")

    // for opening and closing the navigation menu
    menuIcon.addEventListener('click',function(){
      navbar.classList.toggle('open-navbar')
      overlay.classList.toggle('show-overlay')
      menuIcon.classList.toggle('bx-x')
    })

    window.onscroll = function() {
        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('open-navbar')
        overlay.classList.remove("show-overlay")
      };

    navbar.addEventListener('click',function(event){
      if(event.contains(navbar)){
        prompt("clicked inside")
      }
    })
    

});