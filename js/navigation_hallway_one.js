let hallway = document.querySelector("h1");
let content = document.querySelectorAll("p");
hallway.addEventListener("click", function(){
    hallway.innerHTML = "Hallway (Stomach)";
    content[0].innerHTML = "This stomach lining is more colorful than expected."
    content[1].innerHTML = "The walls vibrate and the air moans. This place wants to eat you too, but the forest is hungrier. No choice but to go forward and keep knocking.";
})
hallway.addEventListener("dblclick", function(){
    content[0].innerHTML = "A cat-creature(?) appears.";
    content[1].innerHTML = "It purrs enticingly. It might like being pet."
    let img = document.getElementById("notebook");
    img.innerHTML = "<img id='cat' src='images/cat.png' alt='Cat going right.' tabindex='0'>";
    let buttons = document.getElementById("buttons");
    buttons.innerHTML = '<p><a class= "btn" href="left_two.html">GO LEFT</a><a class= "btn" href="right_two.html">GO RIGHT</a></p>';
})

let cat = document.getElementById("notebook");
cat.addEventListener("dblclick", function(){
    content[0].innerHTML = '"Wash my belly," says the cat.'
    content[1].innerHTML = 'How does it access social media from here?<br><br>You pat down yourself to see if you have your phone so you can ask for the WiFi password or maybe switch to it\'s data plan. Sadly, your pockets are as empty as they were when you first woke up.';
})