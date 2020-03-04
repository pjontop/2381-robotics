// bool variable which keeps track of whether the team letter list in the side navigiation menu is opened or hidden  
teamListOpen = false;
// getting the width of the window for later use 
pageWidth = document.documentElement.clientWidth;

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