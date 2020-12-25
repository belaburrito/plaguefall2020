var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


thingy.addEventListener("mouseover", function( event ) {
  document.getElementById("nav").style.top = "0";

}, false);

nav.addEventListener("mouseover", function( event ) {
  document.getElementById("nav").style.top = "0";

}, false);

thingy.addEventListener("mouseout", function( event ) {
  document.getElementById("nav").style.top = "-100px";
}, false);
