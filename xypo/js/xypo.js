var xypo = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

xypo.onclick = function() {
   if(menu.style.right == "-300px"){
      menu.style.right = "0px";
   }
   else{
      menu.style.right = "-300px";
   };
}
