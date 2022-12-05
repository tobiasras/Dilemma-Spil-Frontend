var dilemmaList = [];
var hintsList = [];
const dilemmaIdHintsListMap = new Map();
var hintBody;

function loadData(){

api("api/get/findall/dilemma", "get").then(response=> {
        
    /* console.log(JSON.stringify(response)) */   

    const dilemmaPromise = response;

   

    for(let i = 0; i < dilemmaPromise.length; i++){

        dilemmaList.push(dilemmaPromise[i]);               

    }
    for(let i = 0; i < dilemmaList.length; i++){

        dilemmaId = dilemmaList[i].id;
    
        loadHints(dilemmaId);
    }
    /* console.log(dilemmaList[0]); */

    renderDilemmaList();

    return;
});

}

function loadHints(dilemmaId){
         
       /* console.log(dilemmaId); */

    api("api/get/findall/" + dilemmaId + "/hintsdilemma", "get").then(response => {

        /* console.log(JSON.stringify(response)); */

        const hintsPromise = response;

        for(let x = 0; x < hintsPromise.length; x++){

        hintsList.push(hintsPromise[x]);
        }
      /* console.log(hintsList.length); */
        
        dilemmaIdHintsListMap.set(dilemmaId, hintsList[0]);

        /* console.log(dilemmaId); */

        hintsList = [];

        /* console.log(dilemmaIdHintsListMap.get(dilemmaId)); */

         /* console.log(dilemmaIdHintsListMap.size); */
       
    });
            
}

function editHints(event, hintId, body){

    event.preventDefault();

    hintBody = {"id":hintId,
    daForHint:$('#daHintFor').val(),
    daAgainstHint:$('#daHintAgainst').val(),
    enForHint:$('#enHintFor').val(),
    enAgainstHint:$('#enHintAgainst').val()
                    };

    console.log(hintBody);

    api("api/post/update/" + hintId + "/hintsdilemma", "post", hintBody);

    
}

