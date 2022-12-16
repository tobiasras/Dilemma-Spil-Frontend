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
    loadPackageList();
}

function renderLanguage(language){

   // console.log(english);

    // Danish
    if(language === "da"){
        
        $('#navgame').text(danish.navgame);
        $('#buttonrules').text(danish.rulesmenulink);
        $('#howtoplaybutton').text(danish.howtostart);
        $('#intro-text').text("Kære studerende. "+
            "På KEA skal der være plads til alle, og ingen skal opleve at få "+
            "deres grænser overtrådt. "+
            "Vi har udarbejdet et dilemmaspil, der highlighter de situationer, "+
            "hvor det er vigtigt at være opmærksom på sine medstuderende. "+
            "Vi håber, at I kan genkende jer selv i situationerne, og vil være med "+
            "til at diskutere, hvad der er på spil og hvordan man bedst kommer "+
            "videre derfra. "+
            "Når I spiller dilemmaspillet, vil I opleve at I tolker situationerne "+
            "forskelligt, og der kan være forskel på, hvad I opfatter som "+
            "grænseoverskridende. Derfor er det selvfølgelig vigtigt, at I "+
            "er åbne overfor hinandens oplevelser. "+
            "Alle dilemmaerne er udarbejdet i samarbejde med KEAs "+
            "studievejledere og repræsenterer virkelige oplevelser. "+
            "Husk på det, når I taler om det. "+
            "Tag diskussionen i grupper, og dyk ned i jeres forskellige "+
            "opfattelser, så vi forhåbentlig kan blive klogere sammen. "+
            "Rigtig god fornøjelse!");
        $('#rules-header').text(danish.rulesheader);
        $('#rules-text').text("Antal: Gruppevis, 3-5 personer. "+
            "Forløb: I gruppen skiftes I til at læse et dilemmakort "+
            "op, og gennemgå de forskellige spørgsmål. "+
            "Oplæseren starter med at give sit perspektiv. "+
            "Spillet er slut, når I er kommet igennem alle "+
            "dilemmaerne. "+
            "Tid: Afsæt en time til at spille dilemmaspillet. "+
            "Formål: Hensigten er ikke, at I skal blive enige, "+
            "men at I får vendt jeres perspektiver sammen. "+
            "Det vigtigste er at få en god diskussion og "+
            "samtale i gang. "+
            "Igangsætter: "+
            "Hvis I oplever at gå i stå i et dilemma, så "+
            "prøv evt. at ændre på nogle af parametrene "+
            "i spørgsmålet. Måske vil I opfatte dilemmaet "+
            "anderledes, hvis det foregik om aftenen i stedet "+
            "for om dagen? Eller hvis personen i dilemmaet "+
            "var en kvinde i stedet for en mand? "+
            "Opsamling: Tag eventuelt en fælles diskussion på holdet "+
            "efterfølgende. Her kan alle grupper fortælle, "+
            "hvad der fyldte hos dem. Hvilke spørgsmål "+
            "de diskuterede mest og hvorfor.Og husk "+
            "selvfølgelig, at der kan være tale om følsomme emner, så hav respekt for hinandens input.");
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
        $('#intro-text').text("Dear Students. At KEA there should be room for everyone, and no one should feel that their boundaries are violated. "+
            "We have created a dilemma game that highlights situations where it is important to pay attention to your fellow students."+
            "We hope that you will be able to recognise yourselves in the various situations, and that you will take part in the discussions on"+
            "what is at stake and how best to move forward from there. When you play the dilemma game, you will find that you interpret"+
            "situations differently, and that it will vary what oversteps your boundaries. Therefore, it is of course important that you are open"+
            "to each other's feelings. All the dilemmas have been prepared together with KEA's student counsellors and they represent real experiences. Remember this"+
            "when you talk about them. Take the discussions in groups and dig into your different perceptions so that, hopefully, we'll learn more together."+
            " Enjoy!");
        $('#rules-header').text(english.rulesheader);  
        $('#rules-text').text(
            "Players: In groups, 3-5 people. "+ 
            "The course of the game: "+
            "Take turns, within your group, to read a dilemma "+
            "card out loud. The reader begins by giving their "+
            "perspective. The game ends when you have "+
            "discussed all dilemmas. "+ 
            "Time: Set aside an hour to play the dilemma game. "+
            "Purpose: The purpose of the game isn’t to make you "+
            "agree, but to make you discuss your different "+
            "perspectives. The most important thing is to get "+
            "a great discussion and conversation going. "+
            "Initiator: If you feel stuck on a dilemma, try to change "+
            "some of the parameters of the question. Maybe "+
            "you’d see the dilemma differently if it happened at night instead of during the day? Or if the "+
            "person in the dilemma was a woman instead of "+
            "a man? "+
            "Summary: If necessary, have a joint discussion in class "+
            "afterwards. Then, all groups can share what was "+
            "most important in their discussion. What questions they discussed the most and why. And, of "+
            "course, keep in mind that these may be sensitive issues, so respect each other’s input.");
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
