let appearenceCheck = document.getElementById("appearance-checkbox");
const appearanceCheckBox = document.getElementById("appearance-checkbox");
var storedAppearance = localStorage.getItem("appearance");

if (!storedAppearance) {
    console.log("NO STORED APP");
    appearanceCheckBox.checked = false;
} else if (storedAppearance === "dark") {
    document.body.setAttribute("data-theme", "dark");
    appearanceCheckBox.checked = true;
    console.log("Appearance set to dark (Found in localStorage)");
} else if (storedAppearance === "light") {
    document.body.setAttribute("data-theme", "light");
    appearanceCheckBox.checked = false;
    console.log("Appearance set to light (Found in localStorage)");
}

appearenceCheck.addEventListener("change", function() {
    if (this.checked) {
       document.body.setAttribute("data-theme", "dark");
       document.getElementById("loading_screen").setAttribute("data-theme", "dark");
       document.getElementById("loading").setAttribute("data-theme", "dark");
       document.getElementById("title").setAttribute("data-theme", "dark"); // Needs work
       localStorage.setItem("appearance", "dark");
       console.log("Appearance set to dark");
    } else {
         document.body.setAttribute("data-theme", "light");
         document.getElementById("loading_screen").setAttribute("data-theme", "light");
         document.getElementById("loading").setAttribute("data-theme", "light");
         document.getElementById("title").setAttribute("data-theme", "light"); // Needs work
         localStorage.setItem("appearance", "light");
         console.log("Appearance set to light");
    }
});