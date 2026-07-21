let appearenceCheck = document.getElementById("appearance-checkbox");

appearenceCheck.addEventListener("change", function() {
    if (this.checked) {
       document.body.setAttribute("data-theme", "dark");
    } else {
         document.body.setAttribute("data-theme", "light");
    }
});