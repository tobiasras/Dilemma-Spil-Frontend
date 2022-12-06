
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
    renderDilemmaList();
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
    let dilemmaHints;

    /* removes previous rendered html */
    $('#dilemma-info').empty();

    for(let i = 0; i < dilemmaList.length; i++){

        if(dilemmaList[i].id === id){
        currentDilemma = dilemmaList[i]; 
        }
    };

    /* console.log(dilemmaIdHintsListMap.size); */

    hint = dilemmaIdHintsListMap.get(currentDilemma.id);   

    let dilemmaForm = '<div id="dilemma-form"><form onsubmit="editDilemma(event, ' + currentDilemma.id + ')"><label for="daName">Dansk navn</label> <input type="text" id="daName" value="' + currentDilemma.daName + '"><label for="enName">Engelsk navn</label> <input type="text" id="enName" value="'
     + currentDilemma.enName +'"><br><label for="daDescription">Dansk dilemma tekst</label><input type="text" id="daDescription" value="' + currentDilemma.daDescription +
      '"> <label for="enDescription">Engelsk dilemma tekst</label><input type="text" id="enDescription" value="' 
      + currentDilemma.enDescription + '"> <input type="submit" value="Opdater"></form></div>' ;
    
    if(hint !== undefined){
     dilemmaHints = '<div id="hints-form"><form onsubmit="editHints(event, ' + hint.id + ')"><label for="daHintFor">Dansk hint +</label><input type="text" id="daHintFor" value="'+hint.daForHint+'"' +  hint.daForHint
        + '"><label for="daHintFor">Dansk hint -</label><input type="text" id="daHintAgainst" value="'+hint.daAgainstHint+'"' +  hint.daAgainstHint
        + '"><br><label for="daHintFor">Engelske hint +</label><input type="text" id="enHintFor" value="'+hint.enForHint+'"' +  hint.enForHint
        + '"><label for="daHintFor">Engelsk hint -</label><input type="text" id="enHintAgainst" value="'+hint.enAgainstHint+'"' + hint.enAgainstHint + '"><input type="submit" value="Opdater"></form></div>' ;  
    }

    let hintsButton = '<div><form onsubmit="addHints('+ currentDilemma.id +')"><input type="submit" value="Tilføj hints"></form></div>';


        /* comments here perhaps maybe better as a separate tab on the page */
     let commentsForm = '<div><form><label for="comments">Kommentarer</label><input type="text" id="comments" value=""' ;

     /* style here */
     $('#dilemma-info').css("column-count", 1);     


    $('#dilemma-info').append(dilemmaForm);

    if(hint !== undefined){
    $('#dilemma-info').append(dilemmaHints);
    }
    else{
        $('#dilemma-info').append(hintsButton); 
    }

    /* clear previous uses */
    hintBody = "";
    dilemmaBody = "";
}

function addNewDilemma(){

    $('#dilemma-info').empty();

    let addDilemmaForm = '<div><form onsubmit="createNewDilemma(event)"><label for="addDaName">Dansk navn</label> <input type="text" id="addDaName" value=""><label for="addEnName">Engelsk navn</label> <input type="text" id="addEnName" value="">' +
    '<br><label for="addDaDescription">Dansk dilemma tekst</label><input type="text" id="addDaDescription" value=""><label for="addEnDescription">Engelsk dilemma tekst</label><input type="text" id="addEnDescription" value="">'+
    '<input type="submit" value="Opret"></form></div>' ;

    $('#dilemma-info').css("column-count", 1);   

    $('#dilemma-info').append(addDilemmaForm);

    dilemmaBody = "";
}

function addHints(dilemmaId){

    $('#dilemma-info').empty();

    let hintsForm = '<div><form onsubmit="createNewHints(event,'+ dilemmaId +')"><label for="createDaFor">Dansk hint +</label> <input type="text" id="createDaFor" value=""><label for="createDaAgainst">Dansk hint -</label> <input type="text" id="createDaAgainst" value="">'+
    '<label for="createEnFor">Engelsk hint +</label> <input type="text" id="createEnFor" value=""><label for="createEnAgainst">Engelsk hint -</label> <input type="text" id="createEnAgainst" value=""><input type="submit" value="Tilføj"></form></div>';

    $('#dilemma-info').append(showDilemmaTextOnly(dilemmaId));
    $('#dilemma-info').append(hintsForm);

}

function showDilemmaTextOnly(dilemmaId){

    let currentDilemma;

    for(let i = 0; i < dilemmaList.length; i++){

        if(dilemmaList[i].id === dilemmaId){
        currentDilemma = dilemmaList[i]; 
        }
    };

    let dilemmaText = '<div>'+ currentDilemma.daName +'/'+ currentDilemma.enName +'</div><br><div>'+ currentDilemma.daDescription +'</div><br><div>'+ currentDilemma.enDescription +'</div>';

    return dilemmaText;

}
