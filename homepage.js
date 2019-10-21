//bool variable which keeps track of the open state of the side navigation  
sideNavOpen = false;
// counter variable which keeps track of time for automatic slideshow
slideshowCounter = 0;
// left value to shift the slideshow images
left = 0;
// bool variable which keeps track of whether the team letter list in the side navigiation menu is opened or hidden  
teamListOpen = false;
// getting the width of the window for later use 
pageWidth = document.documentElement.clientWidth;


// function to automatically scroll to the top of the webpage once is loads
window.onload = function() {
            window.scrollTo(0, 0);
}

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



// function to open or close the 2381 team list in the side navigation menu 
function toggleTeamsList() {
    // if the width of the window is greater than 767px (phone screens) and smaller than 1440px (laptops)
    if(pageWidth <= 1440 && pageWidth > 767) {
        // if the team list is hidden then reset its margin value
        if(!teamListOpen) {
        document.getElementById("menuTeamList").style.marginLeft = "0";
        teamListOpen = true;
        }
        // if the team list is visible then set its margin to a negative value to hide it 
        else {
        document.getElementById("menuTeamList").style.marginLeft = "-30px";
        teamListOpen = false;
        }
    }   

    // if the width of the window is smaller than 767px (phone screens)
    else if(pageWidth <= 767) {
        // if the team list is hidden then reset its margin value
        if(!teamListOpen) {
        document.getElementById("menuTeamList").style.marginLeft = "0";
        teamListOpen = true;
        }
        // if the team list is visible then set its margin to a negative value to hide it 
        else {
        document.getElementById("menuTeamList").style.marginLeft = "-20px";
        teamListOpen = false;
        }
    }

    // for any other larger screeen widths (larger laptops and displays) 
    else {
        // if the team list is hidden then reset its margin value
        if(!teamListOpen) {
        document.getElementById("menuTeamList").style.marginLeft = "0";
        teamListOpen = true;
        }
        // if the team list is visible then set its margin to a negative value to hide it 
        else {
        document.getElementById("menuTeamList").style.marginLeft = "-2.2vw";
        teamListOpen = false;
        }
    }
}