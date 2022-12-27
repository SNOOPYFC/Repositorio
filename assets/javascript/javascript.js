//para parrafo
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 200) {
    document.getElementById("menu").className = "slideUp";
  } else    {document.getElementById("menu").className = "slideUps";
    
  }
}

//para icono
var audio = document.getElementById("myaudio");
audio.volume = 0.04;




