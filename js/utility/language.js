var language = "da";
var isLanguageDa = true;
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
        isLanguageDa = false;
    }
    else{
        language = "da";
        isLanguageDa = true;
    }

    console.log(language);

    renderLanguage(language);
}

function renderLanguage(language){

   // console.log(english);

    // Danish
    if(language === "da"){
        
        $('#navgame').text(danish.navgame);
        $('#buttonrules').text(danish.rulesmenulink);
        $('#howtoplaybutton').text(danish.howtostart);
        $('#intro-text').text(danish.introtext);
        $('#rules-header').text(danish.rulesheader);
        $('#rules-text').text(danish.rulestext);
        $('#howtoheader').text(danish.howtoheader); // currently not in use
        $('#howtotext').text(danish.howtotext);        // currently not in use
        $('#startheader').text(danish.startheader);
        $('#starttext').text(danish.starttext);
        $('#creategamebutton').text(danish.creategamebutton);
        $('#joingamebutton').text(danish.joingamebutton);
        $('#feedbackheader').text(danish.feedbackheader);
        $('#feedbacktext').text(danish.feedbacktext);
        $('#fieldofstudy').text(danish.fieldofstudy);
        $('#playername').text(danish.playername);
        $('#modalcreategamebutton').text(danish.modalcreategamebutton);
        $('#create-game-label').text(danish.creategamelabel);
        $('#modalback').text(danish.modalback);
        $('#studyfieldinput').text(danish.fieldofstudy);
        $('#lobbyplayername').text(danish.playername);
        $('#modaltwoback').text(danish.modalback);
        $('#join-game-label').text(danish.joingamelabel);
        $('#modaljoin').text(danish.modaljoin);
        $('#deadgamelink').text(danish.deadgamelink);
        $('#deadendlink').text(danish.deadendlink);
        $('#backlink').text(danish.backlink);
        $('#explainlobby').text(danish.explainlobby);
        $('#joinedplayers').text(danish.joinedplayers);
        $('#joinedplayersexplained').text(danish.joinedplayersexplained);
        $('#leave-game-modal-label').text(danish.leavegamemodallabel);
        $('#leavegameexplained').text(danish.leavegameexplained);
        $('#lobbybackbutton').text(danish.modalback);
        $('#gamestartbutton').text(danish.gamestartbutton);
        $('#feelheader').text(danish.feelheader);
        $('#thinkheader').text(danish.thinkheader);
        $('#actheader').text(danish.actheader);
        $('#importance-question').text(danish.importancequestion);
        $('#discussion-question').text(danish.discussionquestion);
        $('#game-dilemma-comment').text(danish.gamedilemmacomment);
        $('#go-back-game-button').text(danish.gobackgamebutton);
        $('#go-forward-game-button').text(danish.goforwardgamebutton);
        $('#modal-title-comment').text(danish.modaltitlecomment);
        $('#comment-field').text(danish.commentfield);
        $('#modal-title-hint').text(danish.modaltitlehint);
        $('#header-for').text(danish.headerfor);
        $('#header-against').text(danish.headeragainst);
        $('#hint-close-button').text(danish.hintclosebutton);
        $('#packageChoice').text(danish.packagechoice);
    }

    // English
    if(language === "en"){
                
        $('#navgame').text(english.navgame);
        $('#buttonrules').text(english.rulesmenulink);
        $('#howtoplaybutton').text(english.howtostart);
        $('#intro-text').text(english.introtext);
        $('#rules-header').text(english.rulesheader);  
        $('#rules-text').text(english.rulestext);
        $('#howtoheader').text(english.howtoheader); // currently not in use
        $('#howtotext').text(english.howtotext);    // currently not in use
        $('#startheader').text(english.startheader);
        $('#starttext').text(english.starttext);
        $('#creategamebutton').text(english.creategamebutton);
        $('#joingamebutton').text(english.joingamebutton);
        $('#feedbackheader').text(english.feedbackheader);
        $('#feedbacktext').text(english.feedbacktext);
        $('#fieldofstudy').text(english.fieldofstudy);
        $('#playername').text(english.playername);
        $('#modalcreategamebutton').text(english.modalcreategamebutton);
        $('#create-game-label').text(english.creategamelabel);
        $('#modalback').text(english.modalback);
        $('#studyfieldinput').text(english.fieldofstudy);
        $('#lobbyplayername').text(english.playername);
        $('#modaltwoback').text(english.modalback);
        $('#join-game-label').text(english.joingamelabel);
        $('#modaljoin').text(english.modaljoin);
        $('#deadgamelink').text(english.deadgamelink);
        $('#deadendlink').text(english.deadendlink);
        $('#backlink').text(english.backlink);
        $('#explainlobby').text(english.explainlobby);
        $('#joinedplayers').text(english.joinedplayers);
        $('#joinedplayersexplained').text(english.joinedplayersexplained);
        $('#leave-game-modal-label').text(english.leavegamemodallabel);
        $('#leavegameexplained').text(english.leavegameexplained);
        $('#lobbybackbutton').text(english.modalback);
        $('#gamestartbutton').text(english.gamestartbutton);
        $('#feelheader').text(english.feelheader);
        $('#thinkheader').text(english.thinkheader);
        $('#actheader').text(english.actheader);
        $('#importance-question').text(english.importancequestion);
        $('#discussion-question').text(english.discussionquestion);
        $('#game-dilemma-comment').text(english.gamedilemmacomment);
        $('#go-back-game-button').text(english.gobackgamebutton);
        $('#go-forward-game-button').text(english.goforwardgamebutton);
        $('#modal-title-comment').text(english.modaltitlecomment);
        $('#comment-field').text(english.commentfield);
        $('#modal-title-hint').text(english.modaltitlehint);
        $('#header-for').text(english.headerfor);
        $('#header-against').text(english.headeragainst);
        $('#hint-close-button').text(english.hintclosebutton);
        $('#packageChoice').text(english.packagechoice);
    }

}
