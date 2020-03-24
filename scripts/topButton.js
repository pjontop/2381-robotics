
// function to automatically scroll to the top of the webpage once is loads
// window.onload = function() {
//             window.scrollTo(0, 0);
// }

// everytime the user scrolls on the webpage, run this function to make the back to top button visible
window.onscroll = function() {
    // if the user scrolled more than 60px from the top of the page, display the top button. 
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("topButton").style.opacity = "1";
        document.getElementById("topButton").style.bottom = "25px";
    } 
    // otherwise hide the back to top button
    else {
        document.getElementById("topButton").style.opacity = "0";
        document.getElementById("topButton").style.bottom = "0";
    }
}