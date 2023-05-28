document.addEventListener('DOMContentLoaded', function() {

      let audio1 = document.getElementById("audio1");
      let info=document.getElementById("info1");
      let infotext=document.getElementById('info-text')
      let grid=document.getElementById('grid-container')
      let podSection=document.getElementById('podcast-section')

      audio1.addEventListener('play',function(){
        info.classList.add('show-info')
        infotext.style.opacity=0
        infotext.innerText='Now Playing..'
        infotext.style.animation='yaxis-animation .5s .8s backwards'
        infotext.style.opacity=1

        setTimeout(() => {
          podSection.style.backgroundColor='rgba(0, 0, 0, 0.8)'
        }, 200);

        // setTimeout(() => {
        //   podSection.style.width='100%'
        //   podSection.style.marginTop='0'
        //   podSection.style.borderRadius='0'
        // }, 1600);
      })

      audio1.addEventListener('pause',function(){

        infotext.style.animation=''
        
        podSection.style.backgroundColor='rgb(233, 235, 241)'

        setTimeout(() => {
          info.classList.remove('show-info')
        }, 200);

      })


  });
  