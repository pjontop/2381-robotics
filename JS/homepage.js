// counter variable which keeps track of time for automatic slideshow
slideshowCounter = 0;
// left value to shift the slideshow images
left = 0;
// getting the width of the window for later use 
pageWidth = document.documentElement.clientWidth;


window.setInterval(function(){
    pageWidth = document.documentElement.clientWidth;
     slideshowCounter++;
     if (slideshowCounter >= 5){
        slideshowCounter = 0;
        left -= pageWidth;
        if (left <= pageWidth * -10) {
            left = 0;
        } 
        document.getElementById("s1").style.marginLeft = left;
     }

}, 1000);

function changeSlide(slide) {
    pageWidth = document.documentElement.clientWidth;
    left = slide * -pageWidth;
    document.getElementById("s1").style.marginLeft = left;
    slideshowCounter = 0;

}



