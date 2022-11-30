function resetPage() {
    let dilemma = document.getElementById("dilemma-page");
    let packages = document.getElementById("package-page")
    let statistics = document.getElementById("statistics-page");
    let feedback = document.getElementById("feedback-page");

    dilemma.style.display = "none";
    packages.style.display = "none";
    statistics.style.display = "none";
    feedback.style.display = "none";
}

function renderDilemmas() {
    var x = document.getElementById("dilemma-page");
    
    resetPage();
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    
}

function renderPackages() {
    var x = document.getElementById("package-page");
    
    resetPage();
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    
}

function renderStatistics() {
    var x = document.getElementById("statistics-page");
    
    resetPage();
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    
}

function renderFeedback() {
    var x = document.getElementById("feedback-page");
    
    resetPage();
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
}


function renderDilemmaList(){
    
    



   
    
}

function renderAddDilemma(){

}

function renderEditDilemmaForm(){
    
}
