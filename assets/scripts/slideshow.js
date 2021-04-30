//  Slideshow-left
var slides = ['assets/images/slide1.jpg', 'assets/images/slide2.jpg', 'assets/images/slide3.jpg', 'assets/images/slide4.jpg', 'assets/images/slide5.jpg'];

var j = 0;

function slideshow() {
    document.getElementById("slideLeft").src = slides[j];
    j++;
    if (j > 4) {
        j = 0
    }
};
setInterval(slideshow, 5000);
