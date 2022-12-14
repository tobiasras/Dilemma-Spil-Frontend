function renderDilemmaStats(){

    $('#stats-info').empty();
    $('#dilemma-stats-block').empty();

    $('#stats-info').css("column-count", 1);

    listDilemmasForStats();

    let statsBlock = '<div class="dilemma-stats-block" id="dilemma-stats-block"></div>';

    let startText = '<div>Vælg et dilemma for at se besvarelser.</div>'

    $('#stats-info').append(statsBlock);
    $('#dilemma-stats-block').append(startText);
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
    
    /*
    console.log(dilemmaList[i].id);
    console.log(dilemmaIdStatsMap.get(dilemmaList[i].id));
    */

    }
}

function showStatsForDilemma(dilemmaId){

    $('#dilemma-stats-block').empty();

    var discussionAverage = 0;
    var importanceAverage = 0;

    const answers = dilemmaIdStatsMap.get(dilemmaId);

    for(let i = 0; i < answers.length; i++){

        // console.log(answers[i]);

        discussionAverage = discussionAverage + answers[i].discussionQuality;
        importanceAverage = importanceAverage + answers[i].dilemmaDifficulty;

    }

    // console.log(discussionAverage);

    discussionAverage = discussionAverage/answers.length;
    importanceAverage = importanceAverage/answers.length;

    discussionAverage = discussionAverage.toFixed(1);
    importanceAverage = importanceAverage.toFixed(1);

    // console.log(discussionAverage);

    var averageStats = '<div>Gennemsnit af "Havde vi en god diskussion?": '+ discussionAverage +'</div><br><div>Gennemsnit af "Hvor vigtigt er dilemmaet?": '+ importanceAverage +'</div>'   

    if(answers.length === 0){
        averageStats = '<div>Der er ingen data for dette dilemma endnu.</div>';
    }
    
    $('#dilemma-stats-block').append(averageStats);



    if(answers.length !== 0){
        
    let chartBlock = '<div class="chart-block" id="chart-block"></div>';

    $('#dilemma-stats-block').append(chartBlock);
    
    let discussionChart = '<canvas class="dilemmaChart" id="discussionChart"></canvas>'
    
    let importanceChart = '<canvas class="dilemmaChart" id="importanceChart"></canvas>'

    $('#chart-block').append(discussionChart);
    $('#chart-block').append(importanceChart);

    new Chart("discussionChart", {
        type: "bar",
        data: {
          labels: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10"],
          datasets: [{
            backgroundColor: "green",
            data: [4, 7, 7, 3, 6, 1, 14, 16, 22, 9]
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Havde vi en god diskussion?"
          }
        }
      });

      new Chart("importanceChart", {
        type: "bar",
        data: {
          labels: ["1", "2", "3", "4", "5","6", "7", "8", "9", "10"],
          datasets: [{
            backgroundColor: "purple",
            data: [4, 7, 7, 3, 6, 1, 14, 16, 22, 9]
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Hvor vigtigt var dilemmaet?"
          }
        }
      });

    }
}