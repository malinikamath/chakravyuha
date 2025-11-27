let message = document.getElementById("message");

document.getElementById("lockForm").addEventListener("submit", function(e) {
   e.preventDefault();

  let d = document.getElementById("digits").value;

    // code for "everything" = 33 888 33 777 999 8 44 444 66 4
    // therefore the escape code is 3837984464
  let escapeCode = [3837984464];

  if (d == escapeCode) {
    message.innerHTML = '<a class= "btn" href="the_end.html">Enter door</a>';
  } else {
    message.innerHTML = "It's the wrong code. You need to try again.";
  }
});
