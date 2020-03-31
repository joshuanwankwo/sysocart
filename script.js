function showMenu(params) {

    document.getElementById("menu").style.display = "none";

    document.getElementById("times").style.display = "block"

    document.getElementById("mobileNavigation").style.height = "100vh"

    document.getElementById("mobileNavigation").style.display = "flex";

}


var newLink = document.querySelectorAll("#mobileNavigation > a");
for( i = 0; i <= newLink.length; i++){
    newLink[i].style.display = "none";
}




function closeMenu(params) {

    document.getElementById("menu").style.display ="block";

    document.getElementById("times").style.display = "none";

    document.getElementById("mobileNavigation").style.height = "0vh";

    document.getElementById("mobileNavigation").style.display = "none";

    for( i = 0; i <= newLink.length; i++){
        newLink[i].style.display = "flex";
    }

}