document.addEventListener('DOMContentLoaded', function() {

      let audio1 = document.getElementById("audio1");
      let info=document.getElementById("info1");
      let infotext=document.getElementById('info-text')

      audio1.addEventListener('play',function(){
        info.classList.add('show-info')
        infotext.style.opacity=0
        infotext.innerText='Now Playing..'
        infotext.style.animation='yaxis-animation .5s .8s backwards'
        infotext.style.opacity=1
      })

      audio1.addEventListener('pause',function(){
        info.classList.remove('show-info')
        infotext.style.animation=''
      })


  });
  