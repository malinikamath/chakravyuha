let noteType = document.getElementById("switch");
let search = document.getElementById("search");
let lights = document.getElementById("lights");
let keys = document.getElementById("keys");
let blacklights = false;
let flashlight = false;
search.addEventListener("click", function() {
    flashlight = true;
    search.innerHTML = "r new flashlight should help you look in the dark ";
    noteType.innerHTML = '<a href="images/open_notebook.png" target="_blank" data-lightbox="note" data-title="You need to find the key under the right lights." data-alt="Notebook opened to Entry XXX." class="dark-notebook"> <img src="images/notebook.png" alt="Closed notebook."> </a>';
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
        doorOne.innerHTML = '<a class= "btn" href="door_one.html">DOOR ONE</a>';
    } else if(blacklights == false){
        doorTwo.innerHTML = '<a class= "btn" href="door_two.html">DOOR TWO</a>';
    } else {
        doorThree.innerHTML = '<a class= "btn" href="door_three.html">DOOR THREE</a>';
    }
})