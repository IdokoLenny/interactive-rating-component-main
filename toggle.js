let container1 = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let ans = document.querySelector(".answer");
let rate = document.getElementsByClassName("rate");
let but = document.querySelector("#submitbut");

var x;
for (let i = 0; i < rate.length; i++) {
  rate[i].addEventListener("click", () => {
    x = rate[i].innerHTML;
    for (let i = 0; i < rate.length; i++) {
      rate[i].classList.contains("selected");
      rate[i].classList.remove("selected");
    }
    rate[i].classList.add("selected");
  });
}

but.addEventListener("click", function (event) {
  event.preventDefault();
  if (x == undefined) {
    alert("please make a review");
  } else {
    container1.style.display = "none";
    container2.style.display = "block";
    ans.innerHTML = x;
  }
});
