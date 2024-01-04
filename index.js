let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document. getElementById("guest-score")
let guestScore = 0

function homeScorePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeScorePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeScorePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
    
    
function guestScorePlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}    

function guestScorePlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}    

function guestScorePlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}    