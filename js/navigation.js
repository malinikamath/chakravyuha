let soundEffect = document.getElementsByClassName("sound")[0];
let clicked = false;
soundEffect.volume = 0.1;
document.body.addEventListener("click", function (){
  if(clicked == false) {
    clicked = true;
    soundEffect.play();
  }
});
