let hallway = document.querySelector("h1");
let content = document.querySelectorAll("p");
let buttons = document.getElementById("buttons");
hallway.addEventListener("click", function(){
    hallway.innerHTML = "Hallway (Stomach)";
    content[0].innerHTML = "This stomach lining is more colorful than expected."
    content[1].innerHTML = "The walls vibrate and the air moans. This place wants to eat you too, but the forest is hungrier. No choice but to go forward and keep knocking.";
})
hallway.addEventListener("dblclick", function(){
    content[0].innerHTML = "A cat-creature(?) appears.";
    content[1].innerHTML = "It purrs enticingly. It might like being pet."
    let img = document.getElementById("notebook");
    img.innerHTML = "<img id='cat' src='images/cat.png' alt='Cat-creature going right.' tabindex='0'>";
    buttons.innerHTML = '<p><a class= "btn" href="left_two.html">FOLLOW CAT</a></p>';
    let cat = document.getElementById("cat");
    cat.addEventListener("click", () => move_cat());
})

function move_cat(){
    let cat = document.getElementById("cat");
    cat.classList.add("moveRight");
    hallway.innerHTML = "Cat-Creature (Cute)";
    content[0].innerHTML = '"Wash my belly," says the cat-creature.'
    content[1].innerHTML = "How does it access social media from here?<br><br>You pat down yourself to see if you have your phone so you can ask for the WiFi password or maybe switch to it's data plan. Sadly, your pockets are as empty as they were when you first woke up.";
    buttons.innerHTML = '<p><a class= "btn" href="left_two.html">FOLLOW CAT</a><a class= "btn" href="right_two.html">FOLLOW CAT</a></p>';
}