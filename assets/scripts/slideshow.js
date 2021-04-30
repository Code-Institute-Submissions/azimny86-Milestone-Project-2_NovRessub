//  Slideshow-left

var slides= ['assets/images/slide1.jpg','assets/images/slide2.jpg','assets/images/slide3.jpg','assets/images/slide4.jpg','assets/images/slide5.jpg'];

var j = 0;

function slideshow() {
    document.getElementById("slideLeft").src = slides[j];
    j++;
    if(j>4) {
        j=0
    }
};
setInterval(slideshow, 5000);


//  Slideshow-right

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "assets/images/slide5.jpg";
images[1] = "assets/images/slide4.jpg";
images[2] = "assets/images/slide3.jpg";
images[3] = "assets/images/slide2.jpg";
images[4] = "assets/images/slide1.jpg";
// Change Image
function changeImg(){
	document.slideRight = images[i]

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;