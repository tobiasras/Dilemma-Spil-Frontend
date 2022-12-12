/*

 game-page-link

 lobby-page-link


 */

function renderGamePage() {

    disableAllActiveClass();
    setActive('game-page-link');

    var x = document.getElementById("game-page");
    var y = document.getElementById("game-page-box-two");

    renderGameIntro();
    resetPage();
    setColumnsTwo();




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

    disableAllActiveClass();
    setActive('feedback-page-link');

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

    disableAllActiveClass();
    setActive('lobby-page-link');

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function renderLoginForm() {

    disableAllActiveClass();
    setActive('admin-page-login');


    resetPage();
    const mainDiv = document.getElementById("main-box-container");
    let loginForm = document.createElement("div");
    loginForm.className = "col-10 h-100 m-0";
    loginForm.id = "login-page";
    loginForm.innerHTML = `
      <h2 class="d-inline">Admin Login</h2>
      <form>
        <fieldset>
          <label for="username"></label>
          <input type="text" id="username" name="username" placeholder="username">
          <label for="password"></label>
          <input type="password" id="password" name="password" placeholder="password">
          <button type="button" onclick="submitLogin()")>Login</button>
        </fieldset>
      </form>
    `;
    mainDiv.appendChild(loginForm);
}





function resetPage() {
    resetMainDiv();
    let lobby = document.getElementById("lobby-page");
    let game = document.getElementById("game-page");
    let gameBoxTwo = document.getElementById("game-page-box-two");
    let feedback = document.getElementById("feedback-page");

    lobby.style.display = "none";
    gameBoxTwo.style.display = "none";
    game.style.display = "none";
    feedback.style.display = "none";
    setColumnsOne();
}

function renderGameIntro() {
    resetGameInfoDiv();
    let gameIntroDiv = document.getElementById("game-intro");
    let selectedButton = document.getElementById("game-intro-btn")
    selectedButton.style.backgroundColor = "#eeb71f";
    gameIntroDiv.style.display = "block";
}

function renderGameRules() {
    resetGameInfoDiv();
    let gameRulesDiv = document.getElementById("game-rules");
    let selectedButton = document.getElementById("game-rules-btn");
    selectedButton.style.backgroundColor = "#eeb71f";
    gameRulesDiv.style.display = "block";
}

function resetGameInfoDiv() {
    let gameIntroDiv = document.getElementById("game-intro");
    let gameRulesDiv = document.getElementById("game-rules");
    gameIntroDiv.style.display = "none";
    gameRulesDiv.style.display = "none";

    let listOfBtns = document.getElementsByClassName("game-info-button");
    Array.from(listOfBtns).forEach((item) => {
        item.style.backgroundColor = "white";
    });
}


async function submitLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const adminUser = {
        username: username,
        password: password
    };

    const token = await api("login", "POST", adminUser);
    localStorage.setItem("token", token.jwttoken);

    window.location.href = "http://127.0.0.1:5500/html/admin.html";
}

function resetMainDiv() {
    let mainDiv = document.getElementById("login-page");
    if (mainDiv == null) {
        return;
    }
    mainDiv.remove();
}

function setColumnsOne() {
    $(".main-box-container").css("column-count", 1);
}

function setColumnsTwo() {
    $(".main-box-container").css("column-count", 2);
}

function setActive(id){
    $("#" + id).addClass('active');
}

function disableAllActiveClass() {
    $('.nav-link').removeClass('active');
}

renderGamePage();


