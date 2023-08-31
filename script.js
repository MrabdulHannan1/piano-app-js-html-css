const   pianoKey= document.querySelectorAll( ".pianokey .key");
let audio = new Audio("tunes/a.wav");


const playtune=(key) =>{
audio.src=`tunes/${key}.wav`;
audio.play();
}


pianoKey.forEach(key =>{

key.addEventListener ("click",()=> playtune(key.dataset.key));

});

const pressedKey=(e)=>
    {
playtune(e.key);
    };

    document.addEventListener ("keydown",pressedKey);
