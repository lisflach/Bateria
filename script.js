document.body.addEventListener('keyup', (event)=>{
   /*   console.log(event.code);  */
     playSound(event.code.toLowerCase( ));  /*toLowerCase vai deixar tudo em minusculo como está os nomes dos arqueivos de sons */
});

document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.querySelector("input").value;
   /* console.log("musica", song);   Testando se capturou as teclas digitadas */

   if (song !== "")  {  /* se song é diferente de vazio */
    let songArray = song.split ("");   /* criar um array com cada tecla como um elemento do array */
    /* console.log (songArray);    Testando */

    playComposition(songArray);

   }
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime=0; /*interromper o audio qd a tecla ser clicada novamente*/
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add("active");
   

        setTimeout(()=>{
            keyElement.classList.remove("active");
        }, 300);
    }

}

function playComposition(songArray) {
    let wait = 0;


    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound (`key${songItem}`); 
        }, wait);
        
        wait += 250;
        
        }

}