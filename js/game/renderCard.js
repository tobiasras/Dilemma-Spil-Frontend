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

        console.log(dilemmaJSON);
    }

    // filters card for import information
    filterCardLanguage(isDanish, uncleanDilemma) {
        let newJSON;


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

        return newJSON;
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
    }

    renderForText(){
        $('for-text').text(this.dilemmaCard.hintFor);
        $('against-text').text(this.dilemmaCard.hintAgainst);
    }



}