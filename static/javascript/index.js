document.addEventListener('DOMContentLoaded', function() {
    let playBtn=document.getElementById('play-btn')
    let isPause=true

    // changing the button on click
    playBtn.addEventListener('click',function(){
        if(isPause==true){
            playBtn.src='assets/png/play-button.png'
            isPause=false
        }
        else{
            playBtn.src='assets/png/pause.png'
            isPause=true
        }

    })

    




  });
  