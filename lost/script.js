let btn = document.getElementById("btn");

//button changes display when window is scrolled 20px from top of odcument
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    btn.style.display = "block";
  } else{
    btn.style.display = "none";
  }
}

//scrolls to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

btn.addEventListener('click', topFunction);
