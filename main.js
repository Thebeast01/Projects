const menu = document.querySelector("#menu");
const background = document.querySelector("#background");
const sidenav = document.querySelector('#sidenav');
const closeelem = document.querySelector('#close');
closeelem.addEventListener('click', function(){
    background.style.transform = 'translateX(0px) scale(1)';
  background.style.filter = 'blur(0)';
  sidenav.style.left = '-10%'
})
menu.addEventListener("click", function () {
  background.style.transform = 'translateX(200px) scale(.4) rotatey(-6deg) ';
//   background.style.filter = 'blur(1.5px)';
  sidenav.style.left = '2%'
})

