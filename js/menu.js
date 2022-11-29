function renderGamePage() {
    var x = document.getElementById("game-page");
    var y = document.getElementById("game-page-box-two");
    renderGameIntro();
    
    resetPage();
    
        if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
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
    let gameBoxTwo = document.getElementById("game-page-box-two");
    let feedback = document.getElementById("feedback-page");
    
    lobby.style.display = "none";
    gameBoxTwo.style.display = "none";
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

function setColumnsOne(){
    $(".main-box-container").css("column-count", 1);
}
function setColumnsTwo(){
    $(".main-box-container").css("column-count", 2);
}
renderGamePage();