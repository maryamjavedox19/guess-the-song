let song = "all too well"
const hint = document.querySelector("#hint");
const input = document.querySelector('#input');
const enter = document.querySelector('#enter');
const h2=document.querySelector('.h2')

hint.onclick = function () {
    alert("it's one of her latest song")
}
enter.onclick = function () {
    if(input.value.toLowerCase()===song){
        h2.innerText=("yay! you guessed it.")
        newsong();
    }

    

     else if(input.value==="help")
    {
            alert("it had sadie sink in it's music video")    
        
            if(input.value!==song && input.value!=="help"){
                alert("wrong answer")
            
    }   
       
}  
       
        else if(input.value!==song && input.value!=="help" && input.value!=="")
        {
            alert("wrong answer, type 'help' if you're still stuck")       
        }
    
   
    else if(input.value===""){
        alert("you have to guess something")
    }
    input.value=""
    }


    newsong=function(){
        setTimeout(function(){
            h2.innerText="Guess another song"
        }, 2000)
       song="love story";
       hint.onclick = function () {
       alert("includes Romeo and Juliet")
    }
    enter.onclick = function () {
        if(input.value.toLowerCase()===song){
            h2.innerText=("yay! you guessed it.")

            setTimeout(function(){
                h2.innerText="Guess another song"
            }, 2500)
           thirdsong();
        }
    
    
    else if(input.value!==song && input.value!=="")
    {
        alert("wrong answer")       
    }


else if(input.value===""){
    alert("you have to guess something")
}
input.value=""
 }

}


thirdsong=function(){
        setTimeout(function(){
            h2.innerText="Guess another song"
        }, 2500)
       song="blank space";
       hint.onclick = function () {
       alert("love's a game")
    }
    enter.onclick = function () {
        if(input.value.toLowerCase()===song){
            h2.innerText=("yay! you guessed it.")

            setTimeout(function(){
                h2.innerText="Good job!"
            }, 2000)
        }
    
    
    else if(input.value!==song && input.value!=="")
    {
        alert("wrong answer")       
    }


else if(input.value===""){
    alert("you have to guess something")
}
input.value=""
 }

}
