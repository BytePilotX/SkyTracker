function onPageLoad() {
    window.addEventListener('load', showPage());
    //setTimeout(showPage, 2000); // This line is used for loading screen development purposes.
}

function showPage() {
    document.getElementById("loading_screen").style.display = "none";
    setTimeout(function(){
        document.getElementById("main_page").style.visibility = "visible";
    }, 100);
}