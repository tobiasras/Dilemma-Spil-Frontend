



function showPage(linkID) {
        resetPages();
        disableAllActiveClass();
        //$('#' + linkID).addClass("active");
        document.getElementById(linkID).classList.add("active");
        let pageID = linkID.split(":");
        $('#' + pageID[0]).show();
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

function disableAllActiveClass() {
    $('.nav-link').removeClass("active");
}
function resetPages() {
    $('.content-page').hide();
}



function showMenu(buttonID){
    $('.menu-box').hide();
    $('.menu-btn').removeClass('bg-yellow');

    document.getElementById(buttonID).classList.add("bg-yellow");

    let menuID = buttonID.split(":");
    $('#' + menuID[0]).show();
}



