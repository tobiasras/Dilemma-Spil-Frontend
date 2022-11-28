function renderGamePage() {
    var x = document.getElementById("game-page");
    renderGameIntro();
    resetPage();
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function renderFeedbackPage() {
    var x = document.getElementById("feedback-page");
    resetPage();
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function renderLobbyPage() {
    var x = document.getElementById("lobby-page");
    resetPage();
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 

function resetPage() {
    let lobby = document.getElementById("lobby-page");
    let game = document.getElementById("game-page");
    let feedback = document.getElementById("feedback-page");

    lobby.style.display = "none";
    game.style.display = "none";
    feedback.style.display = "none";
}

function renderGameIntro() {
    resetGameInfoDiv();
    let gameIntroDiv = document.getElementById("game-intro");
    let selectedButton = document.getElementById("game-intro-btn")
    selectedButton.style.backgroundColor = "#eeb71f";
    gameIntroDiv.style.display = "block"
}

function renderGameRules() {
    resetGameInfoDiv();
    let gameRulesDiv = document.getElementById("game-rules");
    let selectedButton = document.getElementById("game-rules-btn");
    selectedButton.style.backgroundColor = "#eeb71f";
    gameRulesDiv.style.display = "block"
}

function resetGameInfoDiv() {
    let gameIntroDiv = document.getElementById("game-intro");
    let gameRulesDiv = document.getElementById("game-rules");
    gameIntroDiv.style.display = "none";
    gameRulesDiv.style.display = "none";
    
    let listOfBtns = document.getElementsByClassName("game-info-button");
    Array.from(listOfBtns).forEach(item => {
        item.style.backgroundColor = "white";
      });
}
renderGamePage();