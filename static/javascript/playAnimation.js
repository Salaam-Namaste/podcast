document.addEventListener('DOMContentLoaded', function() {

      // audios
      let audio1 = document.getElementById("audio1");
      let audio2 = document.getElementById("audio2");
      let audio3 = document.getElementById("audio3");
      let audio5 = document.getElementById("audio5")

      // information layers
      let info=document.getElementById("info1");
      let info2=document.getElementById("info2");
      let info3=document.getElementById("info3");
      let info5=document.getElementById("info5");

      // infotext
      let infotext=document.getElementById('info-text')
      let infotext2=document.getElementById('info-text2')
      let infotext3=document.getElementById('info-text3')
      let infotext5=document.getElementById('info-text5')

      // podcast section
      let podSection=document.getElementById('podcast-section')

      // for podcast 1
      audio1.addEventListener('play',function(){
        info.classList.add('show-info')
        infotext.style.opacity=0
        infotext.innerText='Now Playing..'
        infotext.style.animation='yaxis-animation .5s .8s backwards'
        infotext.style.opacity=1


        setTimeout(() => {
          // podSection.style.backgroundColor='rgba(0, 0, 0, 0.8)'
        }, 200);

      })
      audio1.addEventListener('pause',function(){
        infotext.style.animation=''
        // podSection.style.backgroundColor='rgb(0,0,0,.7)'
        
        info.classList.remove('show-info')

      })

      // for podcast 2
      audio2.addEventListener('play',function(){
        info2.classList.add('show-info')
        infotext2.style.opacity=0
        infotext2.innerText='Now Playing..'
        infotext2.style.animation='yaxis-animation .5s .8s backwards'
        infotext2.style.opacity=1


        setTimeout(() => {
          // podSection.style.backgroundColor='rgba(0, 0, 0, 0.1)'
        }, 200);

      })
      audio2.addEventListener('pause',function(){
        infotext2.style.animation=''
        // podSection.style.backgroundColor='rgb(233, 235, 241)'
        
        info2.classList.remove('show-info')

      })

      // for podcast 3
      audio3.addEventListener('play',function(){
        info3.style.bottom=0
        infotext3.style.opacity=0
        infotext3.innerText='Now Playing..'
        infotext3.style.animation='yaxis-animation .5s .8s backwards'
        infotext3.style.opacity=1


        setTimeout(() => {
          // podSection.style.backgroundColor='rgba(0, 0, 0, 0.1)'
        }, 200);

      })
      audio3.addEventListener('pause',function(){
        infotext3.style.animation=''
        // podSection.style.backgroundColor='rgb(233, 235, 241)'
        
        info3.style.bottom='-40rem'

      })

      // for podcast 5
      audio5.addEventListener('play',function(){
        info5.style.bottom='0'
        infotext5.style.opacity=0
        infotext5.innerText='Now Playing..'
        infotext5.style.animation='yaxis-animation .5s .8s backwards'
        infotext5.style.opacity=1


        setTimeout(() => {
          // podSection.style.backgroundColor='rgba(0, 0, 0, 0.1)'
        }, 200);

      })
      audio5.addEventListener('pause',function(){
        infotext5.style.animation=''
        // podSection.style.backgroundColor='rgb(233, 235, 241)'
        info5.style.bottom='44rem'
        

      })

  });
  