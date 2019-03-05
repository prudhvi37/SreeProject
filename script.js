// Side Menu Navigator
function openNav() {
  var bar = document.getElementsByClassName('bar');
  for(var i = 0;i<bar.length;i++){
    
  }
  if(document.getElementById('side-nav').style.display === "flex"){
     document.getElementById('side-nav').style.display = "none";
     bar.classList.remove("changebar");
  
  }else{
    document.getElementById('side-nav').style.display = "flex";
    document.getElementById('side-nav').style.flexDirection = "column";
    bar.classList.add("changebar");
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
    num_photos = 8,
    container = document.getElementById( 'instagram' ),
    scrElement = document.createElement( 'script' );
 
window.mishaProcessResult = function( dataFromInsta ) {
	// for( x in dataFromInsta.data ){
	// 	container.innerHTML += '<li><img src="' + dataFromInsta.data[x].images.low_resolution.url + '"></li>';
  // }

  // dataFromInsta.forEach(function(value,x,arr){
  //     container.innerHTML += '<li><img src="' + value.data[arr].images.low_resolution.url + '"></li>';
  // });

  for (i = 0; i < dataFromInsta.data.length; i++){
		container.innerHTML += '<li><img src="' + dataFromInsta.data[i].images.low_resolution.url + '"></li>';

  }

}
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );


//Smooth Scrolling

$('#nav-items a, .container button a,#side-nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 150
      },
      800
    );
  }
});