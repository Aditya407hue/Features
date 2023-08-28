var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check === 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "yellowgreen";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "#da0d0d";
    btn.style.color = "white";
    check = 1;
  } else {
    istatus.innerHTML = "Removed";
    istatus.style.color = "#da0d0d";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "royalblue";
    btn.style.color = "white";
    check = 0;
  }
});
