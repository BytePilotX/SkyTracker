var timeOut;
function onPageLoad() {
    timeOut = setTimeout(showPage, 6500);
}

function showPage() {
    document.getElementById("loading_screen").style.display = "none";
    document.getElementById("home_page").style.display = "block";
}