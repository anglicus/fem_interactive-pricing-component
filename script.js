const spanPageViews = document.getElementById("val-pageviews");
const spanMonthlyCost = document.getElementById("val-monthly-cost");
const slider = document.getElementById("slider");
const toggle = document.getElementById("toggle");

var pageViews;
var monthlyCost;
var costFactor = 0.16;
var yearlyBilling = false;
const yearlyDiscount = 25;

function updateDisplay() {
    monthlyCost = pageViews * costFactor;
    if (yearlyBilling) {
        monthlyCost *= (1 - (yearlyDiscount / 100));
    }
    spanPageViews.innerText = pageViews + "K";
    spanMonthlyCost.innerText = "$" + monthlyCost.toFixed(2) + " ";
    const percent = pageViews / 2;
    slider.style = "background: linear-gradient(to right, var(--soft-cyan), var(--soft-cyan) " + percent + "%, var(--lt-grayish-blue), var(--lt-grayish-blue) " + percent + "%);";
}

slider.oninput = function() {
    pageViews = this.value;
    updateDisplay();
}

toggle.onchange = function() {
    if (this.checked == true) {
        yearlyBilling = true;
    } else {
        yearlyBilling = false;
    }
    updateDisplay();
}


document.addEventListener("DOMContentLoaded", function() {
    pageViews = slider.value;
    updateDisplay();
})

