// Show drinks menu function
function hideBreakfastDisplay() {
    document.getElementById("showDrinksOnly").style.display = "block";
    document.getElementById("showBreakfastOnly").style.display = "none";
}

// Click event for the drinks menu
document.getElementById("drinksBtn").addEventListener("click", hideBreakfastDisplay);

// Show breakfast menu function
function hideDrinksDisplay() {
    document.getElementById("showDrinksOnly").style.display = "none";
    document.getElementById("showBreakfastOnly").style.display = "block";
}

// Click event for the breakfast menu
document.getElementById("breakfastBtn").addEventListener("click", hideDrinksDisplay);

