var language = "da";
var danish;
var english;

async function loadLanguages(){
   
    loadEnglish();
    await loadDanish().then( danish =>{

        if(danish != null){
        //  console.log(danish.gameintrobtn);
        renderLanguage(language);
        
        }
    })
    
    
}

async function loadDanish(){

    const response = await fetch("../../json/danish.json");
    danish = await response.json();

    return await danish;
}

async function loadEnglish(){    
    
    const enResponse = await fetch("../../json/english.json");
    english = await enResponse.json();

    // console.log(english);
}

function switchLanguage(){

    if(language === "da"){
        language = "en";
    }
    else{
        language = "da";
    }

    // console.log(language);

    renderLanguage(language);
}

function renderLanguage(language){

   // console.log(english);

    // Danish
    if(language === "da"){

        $('#game-intro-btn').text(danish.gameintrobtn);

    }

    // English
    if(language === "en"){
        
        $('#game-intro-btn').text(english.gameintrobtn);

    }

}
