function renderDilemmaStats(){

    $('#stats-info').empty();

    $('#stats-info').css("column-count", 1);

    listDilemmasForStats();

    let statsBlock = '<div class="dilemma-stats-block" id="dilemma-stats-block"></div>';

    $('#stats-info').append(statsBlock);
}

function renderGeneralStats(){

    $('#stats-info').empty();

    $('#stats-info').css("column-count", 1);

    let generalStats = "Stadig under udvikling :/"

    $('#stats-info').append(generalStats);
}

function listDilemmasForStats(){
    
    for(let i = 0; i < dilemmaList.length; i++){

    let dilemmaNameLink = '<button class="dilemma-name-buttons" onclick="showStatsForDilemma(' + dilemmaList[i].id +')">'+ dilemmaList[i].daName + '</button>'

    $('#stats-info').append(dilemmaNameLink);

    }
}

function showStatsForDilemma(dilemmaId){




}