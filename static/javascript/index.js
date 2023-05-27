document.addEventListener('DOMContentLoaded', function() {
    let isPause=true;
    const buttons = document.getElementsByClassName('play-btn');


    for (let i = 0; i <=buttons.length; i++) {
        buttons[i].addEventListener('click', function() {

            if(isPause==true){
                buttons[i].src='assets/png/play-button.png'
                isPause=false
            }
            else{
                buttons[i].src='assets/png/pause.png'
                isPause=true
            }

        });
    }


  });
  