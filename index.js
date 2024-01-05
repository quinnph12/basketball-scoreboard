let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document. getElementById("guest-score")
let guestScore = 0

function homeScorePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
window.homeScorePlusOne = homeScorePlusOne

function homeScorePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
window.homeScorePlusTwo = homeScorePlusTwo

function homeScorePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
window.homeScorePlusThree = homeScorePlusThree   
    

function guestScorePlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}    
window.guestScorePlusOne = guestScorePlusOne

function guestScorePlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}    
window.guestScorePlusTwo = guestScorePlusTwo

function guestScorePlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}    
window.guestScorePlusThree = guestScorePlusThree