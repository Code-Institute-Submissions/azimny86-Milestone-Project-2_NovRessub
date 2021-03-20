//  Slideshow

var slides= ['assets/images/slide1.jpg','assets/images/slide2.jpg','assets/images/slide3.jpg','assets/images/slide4.jpg','assets/images/slide5.jpg'];

var i = 0;

function slideshow() {
    document.getElementById("slide").src = slides[i];
    i++;
    if(i>4) {
        i=0
    }
}
setInterval(slideshow, 7000)
