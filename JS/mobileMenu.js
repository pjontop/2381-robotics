topNavOpen = false;

function toggleMobileNav(){
    if (topNavOpen){
        document.getElementById("toggleMobileNav").classList.remove("is-active");
        document.getElementById("mobileNav").style.height = "50px";
        document.getElementById("mobileNav").style.opacity = "0.9";

        topNavOpen = false;
    }
    else {
        document.getElementById("toggleMobileNav").classList.add("is-active");
        document.getElementById("mobileNav").style.height = "100vh";
        document.getElementById("mobileNav").style.opacity = "1";
        topNavOpen = true;
    }
}