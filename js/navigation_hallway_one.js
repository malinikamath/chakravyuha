let hallway = document.getElementById("hallway");
let content = document.querySelectorAll("p");
let buttons = document.getElementById("buttons");
let double = false;
let lastKeyTime = 0;

hallway.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const now = Date.now();
    if (now - lastKeyTime < 400) { // within 400ms = doubleclick
      hallway.dispatchEvent(new MouseEvent("dblclick"));
      double = true;
    } else if (double != true){
      // single click
      hallway.dispatchEvent(new MouseEvent("click"));
    }
    lastKeyTime = now;
    e.preventDefault(); // prevent scrolling on space
  }
});

hallway.addEventListener("click", function(){
    if(double != true){
        hallway.innerHTML = "Hallway (Stomach)";
        content[0].innerHTML = "This stomach lining is more colorful than expected."
        content[1].innerHTML = "The walls vibrate and the air moans. This place wants to eat you too, but the forest is hungrier. No choice but to go forward and keep knocking.";
    }
})
hallway.addEventListener("dblclick", function(){
    double = true;
    content[0].innerHTML = "A cat-creature(?) appears.";
    content[1].innerHTML = "It purrs enticingly. It might like being pet."
    let img = document.getElementById("notebook");
    img.innerHTML = "<button class='text-button' id='cat'><img src='images/cat.png' alt='Cat-creature going right.'></button>";
    buttons.innerHTML = '<p><a class= "btn" href="left_two.html">Follow cat</a></p>';
    let cat = document.getElementById("cat");
    cat.addEventListener("click", () => move_cat());
})

function move_cat(){
    let cat = document.getElementById("cat");
    cat.classList.add("moveRight");
    hallway.innerHTML = "Cat-Creature (Cute)";
    content[0].innerHTML = '"Wash my belly," says the cat-creature, quoting an obscure meme you barely recognize.'
    content[1].innerHTML = "How does it access social media from here?<br><br>You pat down yourself to see if you have your phone so you can ask for the WiFi password or maybe switch to it's data plan. Sadly, your pockets are as empty as they were when you first woke up.";
    buttons.innerHTML = '<p><a class= "btn" href="left_two.html">Follow cat left</a><a class= "btn" href="right_two.html">Follow cat right</a></p>';
}