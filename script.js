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
  if(scrollPage > 90){
    document.getElementById('nav-container').style.backgroundColor = "black";
    // document.getElementById('nav-container').style.height = "70px";
  }else{
    document.getElementById('nav-container').style.backgroundColor = "";
    // document.getElementById('nav-container').style.height = "";
  }

}
window.addEventListener("scroll", Scroll);


// Footer Date

const date = new Date().getUTCFullYear();
document.getElementById('date').innerHTML = date;








