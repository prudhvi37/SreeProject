

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














// var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
//     num_photos = 10,
//     container = document.getElementById( 'rudr_instafeed' ),
//     scrElement = document.createElement( 'script' );
 
// window.mishaProcessResult = function( data ) {
// 	for( x in data.data ){
// 		container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
// 	}
// }
 
// scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
// document.body.appendChild( scrElement );





// <!-- Script to get the input value from form -->

// <!-- <script>
//   document.getElementById('submit').addEventListener('click',(e) => {
//     // alert('hello');
//     var name = document.getElementById('name').value,
//         email = document.getElementById('email').value,
//         tel = document.getElementById('tel').value,
//         textarea = document.getElementById('textarea').value;

//         console.log(`name entered is ${name}, email is ${email}, telephone is ${tel} and message is ${textarea}`);
//         e.preventDefault();
//   })
// </script> -->