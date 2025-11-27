let search = document.getElementById("search");
let lights = document.getElementById("lights");
let keys = document.getElementById("keys");
let blacklights = false;
let flashlight = false;
search.addEventListener("click", function() {
    flashlight = true;
    search.innerHTML = " find a new flashlight that should help you look ";
})

lights.addEventListener("click", function(){
    if(flashlight == true){
        blacklights = true;
        lights.innerHTML = "blacklights";
    }
})

let doorOne = document.getElementById("door-one");
let doorTwo = document.getElementById("door-two");
let doorThree = document.getElementById("door-three");
keys.addEventListener("click", function(){
    if(flashlight == false){
        doorOne.innerHTML = '<a class= "btn" href="door_one.html">Enter door one</a>';
    } else if(blacklights == false){
        doorTwo.innerHTML = '<a class= "btn" href="door_two.html">Enter flashlight door</a>';
    } else {
        doorThree.innerHTML = '<a class= "btn" href="door_three.html">Enter blacklight door</a>';
    }
})