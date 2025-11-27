// left one path
let question = document.getElementById("question");
let notebook = document.querySelector("h2");
let clickedQuestion = false;
question.addEventListener("click", function(){
    clickedQuestion = true;
    question.innerHTML = "... is what you'd think if you were delusional.<p>When you stand again, it's obvious that something isn't right here, especially when you spot a dark hallway ahead that certainly wasn't there before. You decide to try opening the Notebook. It deserves capitalizing it's name, when it's so important.</p>";
    let entry = document.getElementById("left_one_notebook");
    entry.setAttribute('data-title', "You're sharp if you found this hint. Tip: don't trust everything you see. Besides this notebook, obviously. <p tabindex='0'><span class='hidden_text'>*Wrong notebook.</span><p>");
    notebook.innerHTML = "<button class='text-button'>Notebook</button>";
})

notebook.addEventListener("click", function(){
    if(clickedQuestion == true){
        let content = document.getElementById("notebook");
        content.style.margin = 0;
        content.innerHTML = notebook.inner = '<a class= "btn" href="hallway_one.html">Run down dark hallway</a>';
        question.innerHTML = "... or you will be if you keep moving.<br><br>The Notebook said to run down the hallway, didn't it?";
    }
})