document.querySelector("button").addEventListener("click", menutoggle);

function menutoggle() {
  var hetmenu = document.querySelector("body > header nav");
  var noscroll = document.querySelector("body");
  hetmenu.classList.toggle("menu-open");
  noscroll.classList.toggle("noscroll");
}
