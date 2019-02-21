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








// instagram posts





var token = '11146853612.1677ed0.4829171de9604ddfa20234819a826856',
    num_photos = 0,
    container = document.getElementById( 'instagram' ),
    scrElement = document.createElement( 'script' );
 
window.mishaProcessResult = function( dataFromInsta ) {
	for( x in dataFromInsta.data ){
		container.innerHTML += '<li><img src="' + dataFromInsta.data[x].images.low_resolution.url + '"></li>';
  }
  // dataFromInsta.forEach(function(value,x,arr){
  //     container.innerHTML += '<li><img src="' + value.data[arr].images.low_resolution.url + '"></li>';
  // });
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );