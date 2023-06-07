document.addEventListener('DOMContentLoaded',function(){

    const copyToClipboard=function(link){

        link="https://salaam-namaste.github.io/podcast/podcastId/"+link
        navigator.clipboard.writeText(link)
    }
      
    const pod1LinkIcon=document.getElementById("podcast1-linkIcon")    
    const pod2LinkIcon=document.getElementById("podcast2-linkIcon")    
    const pod3LinkIcon=document.getElementById("podcast3-linkIcon")    
    const pod4LinkIcon=document.getElementById("podcast4-linkIcon")    
    const pod5LinkIcon=document.getElementById("podcast5-linkIcon")    
    const pod6LinkIcon=document.getElementById("podcast6-linkIcon")    
    const pod7LinkIcon=document.getElementById("podcast7-linkIcon")    
    const pod8LinkIcon=document.getElementById("podcast8-linkIcon")    
    const pod9LinkIcon=document.getElementById("podcast9-linkIcon")    
    const pod10LinkIcon=document.getElementById("podcast10-linkIcon")    


    // pod 1 click copy
    pod1LinkIcon.addEventListener("click",function(){
        link=pod1LinkIcon.getAttribute("link")
        copyToClipboard(link)
    })

    // pod 2 click copy
    pod2LinkIcon.addEventListener("click",function(){
        link=pod2LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })
    // pod 3 click copy
    pod3LinkIcon.addEventListener("click",function(){
        link=pod3LinkIcon.getAttribute("link")
        copyToClipboard(link)


    })
    // pod 4 click copy
    pod4LinkIcon.addEventListener("click",function(){
        link=pod4LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })
    // pod 5 click copy
    pod5LinkIcon.addEventListener("click",function(){
        link=pod5LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })
    // pod 6 click copy
    pod6LinkIcon.addEventListener("click",function(){
        link=pod6LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })
    // pod 7 click copy
    pod7LinkIcon.addEventListener("click",function(){
        link=pod7LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })
    // pod 8 click copy
    pod8LinkIcon.addEventListener("click",function(){
        link=pod8LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })

    // pod 9 click copy
    pod9LinkIcon.addEventListener("click",function(){
        link=pod9LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })

    // pod 10 click copy
    pod10LinkIcon.addEventListener("click",function(){
        link=pod10LinkIcon.getAttribute("link")
        copyToClipboard(link)
        

    })

})