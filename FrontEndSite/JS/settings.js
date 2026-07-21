let appearenceCheck = document.getElementById("appearance-checkbox");
const appearanceCheckBox = document.getElementById("appearance-checkbox");
var storedAppearance = localStorage.getItem("appearance");

if (!storedAppearance) {
    console.log("NO STORED APP");
    appearanceCheckBox.checked = false;
} else if (storedAppearance === "dark") {
    document.body.setAttribute("data-theme", "dark");
    appearanceCheckBox.checked = true;
}

appearenceCheck.addEventListener("change", function() {
    if (this.checked) {
       document.body.setAttribute("data-theme", "dark");
       localStorage.setItem("appearance", "dark");
    } else {
         document.body.setAttribute("data-theme", "light");
         localStorage.setItem("appearance", "light");
    }
});