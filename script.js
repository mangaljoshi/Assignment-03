// Greeting button
document.getElementById("greetBtn").addEventListener("click", function () {
  let name = document.getElementById("username").value;
  if (name === "") {
    alert("Please enter your name");
  } else {
    document.getElementById("greeting").innerText = "Hello, " + name;
  }
});

// Color boxes
let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    let color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
  });
});
