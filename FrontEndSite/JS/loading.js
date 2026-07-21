function onPageLoad() {
    window.addEventListener('load', showPage());
}

function showPage() {
    document.getElementById("loading_screen").style.display = "none";
    document.getElementById("home_page").style.display = "block";
}