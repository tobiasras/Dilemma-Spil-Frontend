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

    discussionOne = countDiscussionDataPoints(1, dilemmaId);
    discussionTwo = countDiscussionDataPoints(2, dilemmaId);
    discussionThree = countDiscussionDataPoints(3, dilemmaId);
    discussionFour = countDiscussionDataPoints(4, dilemmaId);
    discussionFive = countDiscussionDataPoints(5, dilemmaId);
    discussionSix = countDiscussionDataPoints(6, dilemmaId);
    discussionSeven = countDiscussionDataPoints(7, dilemmaId);
    discussionEight = countDiscussionDataPoints(8, dilemmaId);
    discussionNine = countDiscussionDataPoints(9, dilemmaId);
    discussionTen = countDiscussionDataPoints(10, dilemmaId);

    importanceOne = countImportanceDataPoints(1, dilemmaId);
    importanceTwo = countImportanceDataPoints(2, dilemmaId);
    importanceThree = countImportanceDataPoints(3, dilemmaId);
    importanceFour = countImportanceDataPoints(4, dilemmaId);
    importanceFive = countImportanceDataPoints(5, dilemmaId);
    importanceSix = countImportanceDataPoints(6, dilemmaId);
    importanceSeven = countImportanceDataPoints(7, dilemmaId);
    importanceEight = countImportanceDataPoints(8, dilemmaId);
    importanceNine = countImportanceDataPoints(9, dilemmaId);
    importanceTen = countImportanceDataPoints(10, dilemmaId);
    
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
            data: [discussionOne, discussionTwo, discussionThree, discussionFour, discussionFive, discussionSix, discussionSeven, discussionEight, discussionNine, discussionTen]
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
            data: [importanceOne, importanceTwo, importanceThree, importanceFour, importanceFive, importanceSix, importanceSeven, importanceEight, importanceNine, importanceTen]
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

function countDiscussionDataPoints(label, dilemmaId){

  let count = 0;
  const answers = dilemmaIdStatsMap.get(dilemmaId);
  
  for(let i = 0; i < answers.length; i++){

    if(label === answers[i].discussionQuality){
      count++;
    }
  }

  return count;
}

function countImportanceDataPoints(label, dilemmaId){

  let count = 0;
  const answers = dilemmaIdStatsMap.get(dilemmaId);
  
  for(let i = 0; i < answers.length; i++){

    if(label === answers[i].dilemmaDifficulty){
      count++;
    }
  }

  return count;
}