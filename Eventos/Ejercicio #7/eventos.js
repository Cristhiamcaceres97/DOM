const menu = document.getElementById("menu");

window.addEventListener("scroll", function() {
 
  const scrollY = window.scrollY;

  if (scrollY > 200) {
    menu.style.backgroundColor = "red";
  } else {
    menu.style.backgroundColor = "blue";
  }
});
