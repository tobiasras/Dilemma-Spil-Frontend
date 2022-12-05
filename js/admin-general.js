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
    
    $('#dilemma-info').empty();

    $('#dilemma-info').css("column-count", 3);

    for(let i = 0; i < dilemmaList.length; i++){

    let dilemmaNameLink = '<button class="dilemma-name-buttons" onclick="renderEditDilemmaForm(' + dilemmaList[i].id +')">'+ dilemmaList[i].daName + '</button>'

    $('#dilemma-info').append(dilemmaNameLink);

    }
}


function renderEditDilemmaForm(id){
    
    let currentDilemma;
    let hint;

    $('#dilemma-info').empty();

    for(let i = 0; i < dilemmaList.length; i++){

        if(dilemmaList[i].id === id){
        currentDilemma = dilemmaList[i]; 
        }
    };

    /* console.log(dilemmaIdHintsListMap.size); */

    hint = dilemmaIdHintsListMap.get(currentDilemma.id);   

    

    let dilemmaForm = '<div id="dilemma-form"><form><label for="daName">Dansk navn</label> <input type="text" id="daName" value="' + currentDilemma.daName + '"><label for="enName">Engelsk navn</label> <input type="text" id="enName" value="'
     + currentDilemma.enName +'"><br><label for="daDescription">Dansk dilemma tekst</label><input type="text" id="daDescription" value="' + currentDilemma.daDescription +
      '"> <label for="enDescription">Engelsk dilemma tekst</label><input type="text" id="enDescription" value="' 
      + currentDilemma.enDescription + '"> <input type="submit" value="Opdater"></form></div>' ;

     let dilemmaHints = '<div id="hints-form"><form><label for="daHintFor">Dansk hint +</label><input type="text" id="daHintFor" value="'+hint.daForHint+'"' +  hint.daForHint
        + '"><label for="daHintFor">Dansk hint -</label><input type="text" id="daHintAgainst" value="'+hint.daAgainstHint+'"' +  hint.daAgainstHint
        + '"><br><label for="daHintFor">Engelske hint +</label><input type="text" id="enHintFor" value="'+hint.enForHint+'"' +  hint.enForHint
        + '"><label for="daHintFor">Engelsk hint -</label><input type="text" id="enHintAgainst" value="'+hint.enAgainstHint+'"' + hint.enAgainstHint + '"><input type="submit" value="Opdater"></form></div>' ;  
           
     let commentsForm = '<div><form><label for="comments">Kommentarer</label><input type="text" id="comments" value=""' ;


     /* style here */
     $('#dilemma-info').css("column-count", 1);     


    $('#dilemma-info').append(dilemmaForm);
    $('#dilemma-info').append(dilemmaHints);
}
