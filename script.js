// Side Menu Navigator
function openNav() {
  if(document.getElementById('side-nav').style.display === "flex"){
  document.getElementById('side-nav').style.display = "none";
  }else{
    document.getElementById('side-nav').style.display = "flex";
    document.getElementById('side-nav').style.flexDirection = "column";
  }
}

// Change Navigation color on scroll
function Scroll(){
  var scrollPage = window.pageYOffset;
  if(scrollPage > 100){
    document.getElementById('nav-container').style.backgroundColor = "black";
  }else{
    document.getElementById('nav-container').style.backgroundColor = "";
  }

}
window.addEventListener("scroll", Scroll);


// Footer Date

const date = new Date().getUTCFullYear();
document.getElementById('date').innerHTML = date;

