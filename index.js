let guestEl = document.getElementById("guest-count")
let homeEl = document.getElementById("home-count")
let countH = 0
let countG = 0

function plusOne(){
    countH +=1
    homeEl.innerText = countH
    checkcolor()
}
function plusTwo(){
    countH +=2
    homeEl.innerText = countH
    checkcolor()
}
function plusThree(){
    countH +=3
    homeEl.innerText = countH
    checkcolor()
}

function plusOneG(){
    countG +=1
    guestEl.innerText = countG
    checkcolor()
}
function plusTwoG(){
    countG +=2
    guestEl.innerText = countG
    checkcolor()
}
function plusThreeG(){
    countG +=3
    guestEl.innerText = countG
    checkcolor()
}

function reset() {
    countG = 0;
    countH = 0;
    guestEl.innerText = countG;
    homeEl.innerText = countH;
    checkcolor()
}
function checkcolor() {
    if (countH > countG) {
        homeEl.style.color = "#FBBF24";
        guestEl.style.color = "#F94F6D"; // Reset guest color
    } else if (countH < countG) {
        guestEl.style.color = "#FBBF24";
        homeEl.style.color = "#F94F6D"; // Reset home color
    } else {
        guestEl.style.color = "#F94F6D";
        homeEl.style.color = "#F94F6D";
    }
}

