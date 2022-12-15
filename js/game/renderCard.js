var missingHints = {
    "id":1,
    "daForHint":"Der er ikke hints til dette dilemma.",
    "daAgainstHint":":/",
    "enForHint":"There are no hints for this dilemma.",
    "enAgainstHint":":/"
}

class RenderCard {

    /* JSON MODEL FOR CARD

       {
            "id": 3,
            "daName": "Computer",
            "enName": "Mac or Windows Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "daDescription": "Mac eller Windows",
            "enDescription": "Computer",
            "commentsDilemmaModels": [],
            "gameAnswersModels": [],
            "hintsDilemmaModels": []
        }
    */

    constructor(dilemmaJSON, isDanish) {
                this.dilemmaCard = this.filterCardLanguage(isDanish, dilemmaJSON);
        this.answers = dilemmaJSON.gameAnswersModels;
           }

    // filters card for import information
    filterCardLanguage(isDanish, uncleanDilemma) {
        let newJSON;
        
        if(uncleanDilemma.hintsDilemmaModels.length === 0){
            uncleanDilemma.hintsDilemmaModels.push(missingHints);
            
            // console.log(uncleanDilemma.hintsDilemmaModels[0]);
        }


        if (isDanish) {
            newJSON = {
                name: uncleanDilemma.daName,
                description: uncleanDilemma.daDescription,
                hintFor: uncleanDilemma.hintsDilemmaModels[0].daForHint,
                hintAgainst: uncleanDilemma.hintsDilemmaModels[0].daAgainstHint
            }
        } else {
            newJSON = {
                name: uncleanDilemma.enName,
                description: uncleanDilemma.enDescription,
                hintFor: uncleanDilemma.hintsDilemmaModels[0].enForHint,
                hintAgainst: uncleanDilemma.hintsDilemmaModels[0].enAgainstHint
            }

        }

        console.log(newJSON);

        return newJSON;
    }


    displayLastCard(){

    }

    // uses jquery
    renderCard(appendTo) {
        appendTo.empty();

        let header = $('<div></div>');
        let h1 = $('<h1></h1>').text(this.dilemmaCard.name);

        header.append(h1);

        let body = $('<div></div>');
        let bodyDescription = $('<div></div>');
        let description = $('<p></p>').text(this.dilemmaCard.description);

        bodyDescription.append(description);
        body.append(bodyDescription);

        appendTo.append(header);
        appendTo.append(body);


        if (this.answers.length !== 0) {
            cardAnswer.changeImportanceDisplay(this.answers[0].dilemmaDifficulty);
            cardAnswer.changeValueDisplay(this.answers[0].discussionQuality);
        } else {
            cardAnswer.changeImportanceDisplay(5);
            cardAnswer.changeValueDisplay(5)
        }

    }

    renderForText() {
        if(this.dilemmaCard.hintFor != undefined){
        $('for-text').text(this.dilemmaCard.hintFor);
        }
        else{
            if(isLanguageDa){
            $('for-text').text("Der er ingen hints.");
            }
            else{
                $('for-text').text("There are no hints.");
            } 
        }
        

        if(this.dilemmaCard.hintFor != undefined){
        $('against-text').text(this.dilemmaCard.hintAgainst);
        }
    }


}