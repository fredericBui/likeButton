// Change the name of the icon class
const icon = document.querySelector('.fa-heart');

function switchColor(){
  if (icon.style.color === "lightgray") {
    // You can change the color of the switch
    icon.style.color = "red";
  } else {
    icon.style.color = "lightgray";
  }
}