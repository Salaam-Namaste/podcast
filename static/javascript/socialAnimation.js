document.addEventListener("DOMContentLoaded",()=>{

    let socials=document.getElementsByClassName("socials")
    
    setInterval(() => {
        socials[0].style.backgroundColor='purple'
        socials[0].style.transform='translateY(-5%)'
    }, 2000);
    setInterval(() => {
        socials[0].style.backgroundColor=''
        socials[0].style.transform='translateY(0%)'
    }, 4000);

    setInterval(() => {
        socials[1].style.backgroundColor='purple'
        socials[1].style.transform='translateY(-5%)'
    }, 6000);
    setInterval(() => {
        socials[1].style.backgroundColor=''
        socials[1].style.transform='translateY(0%)'
    }, 8000);

    setInterval(() => {
        socials[2].style.backgroundColor='purple'
        socials[2].style.transform='translateY(-5%)'
    }, 10000);
    setInterval(() => {
        socials[2].style.backgroundColor=''
        socials[2].style.transform='translateY(0%)'
    }, 12000);

})