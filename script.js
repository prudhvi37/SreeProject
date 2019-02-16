function openNav() {
  if(document.getElementById('side-nav').style.display === "flex"){
  document.getElementById('side-nav').style.display = "none";
  }else{
    document.getElementById('side-nav').style.display = "flex";
    document.getElementById('side-nav').style.flexDirection = "column";
  }
}


function Scroll(){
  var scrollPage = window.pageYOffset;
  if(scrollPage > 100){
    document.getElementById('nav-container').style.backgroundColor = "black";
  }else{
    document.getElementById('nav-container').style.backgroundColor = "";
  }

}
window.addEventListener("scroll", Scroll);
