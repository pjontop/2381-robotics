// variable which keeps track of the current colour theme 
darkTheme = true;
//bool variable which keeps track of the open state of the side navigation  
sideNavOpen = false;
// counter variable which keeps track of which card is being displayed in the 2381 team slider (to make sure they cant just keep spamming the button)
counter = 0;
// bool variable which keeps track of whether the team letter list in the side navigiation menu is opened or hidden  
teamListOpen = false;

//colour theme switch function, which switches from dark to light or light to dark theme.
/*function changeColor(){
    // if dark theme is on
    if(darkTheme) {
        darkTheme = false; //turning dark theme off 
        //changing a bunch of colours
        document.body.style.backgroundColor = "#EAE8FF";
        document.getElementById("topButton").style.backgroundColor = "#9B1D20";
        document.getElementsByClassName("teamLogo")[0].style.color = "#2D3142";
        document.getElementsByClassName("teamLogo")[0].style.borderColor = "#2D3142";
        document.getElementsByClassName("background1")[0].style.backgroundColor = "#EAE8FF";
        document.getElementsByClassName("background2")[0].style.backgroundColor = "#ADACB5";
        document.getElementsByClassName("largeTitle")[0].style.color = "#2D3142";
        document.getElementsByClassName("thinTitle1")[0].style.color = "#ADACB5";
        document.getElementsByClassName("thinTitle2")[0].style.color = "#EAE8FF";
        document.getElementsByClassName("vex2019Text")[0].style.color = "#2D3142";
        // links in side nav menu
        for(i=0;i<8;i++){
            document.getElementsByClassName("link")[i].style.color = "#9B1D20";
        }
        document.getElementById("menuTeamList").style.backgroundColor = "#9B1D20";
        // list of 2381 teams in side nav
        for(i=0;i<7;i++){
            document.getElementById("menuTeamList").getElementsByTagName("a")[i].style.color = "#EAE8FF";
        }
        document.getElementsByClassName("contactText1")[0].style.backgroundColor = "#9B1D20";
        document.getElementsByClassName("background3")[0].style.backgroundColor = "#EAE8FF";
        document.getElementsByClassName("background4")[0].style.backgroundImage = "linear-gradient(#ADACB5, #EAE8FF 80%)";
        document.getElementById("vexInfoSection").getElementsByTagName("p")[0].style.color = "#2D3142";
        document.getElementById("vexInfoSection").getElementsByTagName("p")[1].style.color = "#2D3142";
        document.getElementsByClassName("vexLink")[0].style.color = "#2D3142";
        document.getElementsByClassName("vexLink")[1].style.color = "#2D3142";
        document.getElementById("teamsContainer").style.backgroundColor = "#EAE8FF";
        document.getElementById("teamsContainer").style.borderColor = "#EAE8FF";
        document.getElementsByClassName("moveTeamsButtonLeft")[0].style.color = "#9B1D20";
        document.getElementsByClassName("moveTeamsButtonRight")[0].style.color = "#9B1D20";
        //adjusting colours of 2381 teams slider 
        for(i=0;i<7;i++){
            document.getElementsByClassName("teamPageImage")[i].style.color = "#EAE8FF";
            document.getElementsByClassName("teamPageLink")[i].style.backgroundColor = "#9B1D20";
            document.getElementsByClassName("teamPageLink")[i].style.color = "#EAE8FF";
        }
        document.getElementsByClassName("footer")[0].style.backgroundColor = "#EAE8FF";
        document.getElementsByClassName("footer")[0].style.borderColor = "#9B1D20";
        document.getElementsByClassName("footer")[0].getElementsByClassName("logo")[0].style.borderColor = "#2D3142";
        document.getElementsByClassName("footer")[0].getElementsByClassName("logo")[0].style.color = "#2D3142";
        // changing colours of slidshow/gallery buttons
        for(i=0;i<10;i++){
            document.getElementsByClassName("bar")[i].classList.add("bar2"); 
        }
    }
    // if light theme is on
    else {
        darkTheme = true; // turning dark theme on
        document.body.style.backgroundColor = "#AA0723";
        document.getElementById("topButton").style.backgroundColor = "#F9D38B";
        document.getElementsByClassName("teamLogo")[0].style.color = "#F9D38B";
        document.getElementsByClassName("teamLogo")[0].style.borderColor = "#F9D38B";
        document.getElementsByClassName("background1")[0].style.backgroundColor = "#AA0723";
        document.getElementsByClassName("background2")[0].style.backgroundColor = "#790218";
        document.getElementsByClassName("largeTitle")[0].style.color = "#F9D38B";
        document.getElementsByClassName("thinTitle1")[0].style.color = "#790218";
        document.getElementsByClassName("thinTitle2")[0].style.color = "#AA0723";
        document.getElementsByClassName("vex2019Text")[0].style.color = "#F9D38B";
        //links in side nav menu
        for(i=0;i<8;i++){
            document.getElementsByClassName("link")[i].style.color = "#F9D38B";
        }
        //list of 2381 teams in side nav
        document.getElementById("menuTeamList").style.backgroundColor = "#F9D38B";
        for(i=0;i<7;i++){
            document.getElementById("menuTeamList").getElementsByTagName("a")[i].style.color = "#790218";
        }
        document.getElementsByClassName("contactText1")[0].style.backgroundColor = "#004777";
        document.getElementsByClassName("background3")[0].style.backgroundColor = "#AA0723";
        document.getElementsByClassName("background4")[0].style.backgroundImage = "linear-gradient(#790218, #AA0723 80%)";
        document.getElementById("vexInfoSection").getElementsByTagName("p")[0].style.color = "#F9D38B";
        document.getElementById("vexInfoSection").getElementsByTagName("p")[1].style.color = "#F9D38B";
        document.getElementsByClassName("vexLink")[0].style.color = "#F9D38B";
        document.getElementsByClassName("vexLink")[1].style.color = "#F9D38B";
        document.getElementById("teamsContainer").style.backgroundColor = "#AA0723";
        document.getElementById("teamsContainer").style.borderColor = "#F9D38B";
        document.getElementsByClassName("moveTeamsButtonLeft")[0].style.color = "#F9D38B";
        document.getElementsByClassName("moveTeamsButtonRight")[0].style.color = "#F9D38B";
        //adjusting colours of 2381 teams slider
        for(i=0;i<7;i++){
            document.getElementsByClassName("teamPageImage")[i].style.color = "#F9D38B";
            document.getElementsByClassName("teamPageLink")[i].style.backgroundColor = "#F9D38B";
            document.getElementsByClassName("teamPageLink")[i].style.color = "#AA0723";
        }
        document.getElementsByClassName("footer")[0].style.backgroundColor = "#AA0723";
        document.getElementsByClassName("footer")[0].style.borderColor = "#F9D38B";
        document.getElementsByClassName("footer")[0].getElementsByClassName("logo")[0].style.borderColor = "#F9D38B";
        document.getElementsByClassName("footer")[0].getElementsByClassName("logo")[0].style.color = "#F9D38B";
        // changing colours of slideshow/gallery buttons
        for(i=0;i<10;i++){
            document.getElementsByClassName("bar")[i].classList.add("bar2");
        }
    }
}*/

// function to automatically scroll to the top of the webpage once is loads
window.onload = function() {
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
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

// function just like moveCardRight(), which moves the cards in the 2381 teams slider to the left
function moveCardsLeft() {
    // making sure they are past the 1st card so they can acutally move to the left
    if (counter > 0) {
        //hiding the current card corresponsding to the counter variable
        document.getElementsByClassName("card")[counter].style.opacity = "0";
        document.getElementsByClassName("card")[counter].style.height = "0";
        //changing the counter variable
        counter--;
        // displaying the new card corresponding to thte counter variable 
        document.getElementsByClassName("card")[counter].style.opacity = "1";
        document.getElementsByClassName("card")[counter].style.height = "400px";
    }
}
        
// function just like moveCardLeft(), which moves the cards in the 2381 teams slider to the right
function moveCardsRight() {
    // making sure they are past the 2nd last card so they can acutally move to the right
    if (counter < 6) {
        //hiding the current card corresponsding to the counter variable
        document.getElementsByClassName("card")[counter].style.opacity = "0";
        document.getElementsByClassName("card")[counter].style.height = "0";
        //changing the counter variable
        counter++;
        // displaying the new card corresponding to thte counter variable 
        document.getElementsByClassName("card")[counter].style.opacity = "1";
        document.getElementsByClassName("card")[counter].style.height = "400px";
    }
}


// function to open or close the 2381 team list in the side navigation menu 
function toggleTeamsList() {
    // getting the width of the window for later use 
    pageWidth = document.documentElement.clientWidth;
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