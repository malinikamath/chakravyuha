let leaves = document.getElementById("leaves");
let p = document.getElementById("phone_back");
leaves.addEventListener("click", function () {
  leaves.innerHTML = "You uncover the broken remains of a flip phone's keyboard";
  p.innerHTML = '<img id="phone" src="images/flipphone_top.png" alt="The top of a flipphone keyboard. 1 is voicemail. 2 is a, b, c. 3 is d, e, f."><br><img id="phone" src="images/flipphone_middle.png" alt="The middle of a flipphone keyboard. 4 is g, h, i. 5 is j, k, l. 6 is m, n, o."><br><img id="phone" src="images/flipphone_bottom.png" alt="The bottom of a flipphone keyboard. 7 is p, q, r, s. 8 is t, u, v. 9 is w, x, y, z."></img><br>';
});


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
