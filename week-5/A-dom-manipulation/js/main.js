var myButton1 = document.querySelector("#bgrChangeBtn");
myButton1.addEventListener("click", function() {
  var box = document.querySelector(".jumbotron");
  box.style.backgroundColor = "blue";
});

var myButton1 = document.querySelector("#alertBtn");
myButton1.addEventListener("click", function() {
  var container = document.querySelector("#addTextBtn");
  var newParagraph = document.createElement("p");
  newParagraph.innerText = "more information!!";
  newParagraph.id = "mypara";
  container.appendChild(newParagraph);
});
