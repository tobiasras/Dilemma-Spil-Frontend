class Game {




    saveAnswer() {

        let answerModel = {
            dilemmaDifficulty: $('#dilemma-importance').val(),
            discussionQuality: $('#dilemma-value').val(),
            dilemmaModelGA: this.dilemmaCards[this.currentRound]
        }

        this.answers[this.currentRound] = (answerModel);
    }


    startGame() {
        socket.startGame();
    }


    setupGame(gameLobby) {

        this.answers = [];

        gameUI.displayGamePage()

        console.log(gameLobby);

        this.gameLobby = gameLobby;



        this.currentRound = 0;
        this.dilemmaCards = gameLobby.cardPackage.dilemmaModels;


        this.currentCard = this.dilemmaCards[this.currentRound];
        this.gameName = gameLobby.cardPackage.enName;
        this.totalCards = this.dilemmaCards.length;

        this.nextCard();
    }

    nextRound(newRound) {
        game.saveAnswer();
        this.currentRound = newRound;

        this.nextCard();
    }

    forwardOneCard() {

        console.log("currentRound: " + this.currentRound + "    total cards: " + this.totalCards)

        if (this.currentRound < this.totalCards -1) {
            let newRound = this.currentRound + 1;
            socket.nextCard(newRound);
        } else {

            let newRound = this.currentRound + 1;
            game.saveAnswer();


            api("api/post/save/answers", "POST", this.answers).then(response => {
                console.log(response);
            });



            console.log(this.answers)


            socket.nextCard(newRound);
        }

        // tells server to load new card for all players in lobby


    }

    backOneCard() {

        if (this.currentRound !== 0) {


            let newRound = this.currentRound - 1;
            socket.nextCard(newRound);


            socket.nextCard(newRound);
        }

    }

    // render card
    nextCard() {
        let dilemmaCard = this.dilemmaCards[this.currentRound];

        if (this.answers[this.currentRound] !== undefined){
            this.newCard = new RenderCard(dilemmaCard, true, this.answers[this.currentRound])
        } else {
            this.newCard = new RenderCard(dilemmaCard, true)
        }

        // render object
        this.newCard.renderCard($('#card-body'));
    }

    renderForAgainstText() {
        $('#for-text').text(this.newCard.dilemmaCard.hintFor);
        $('#against-text').text(this.newCard.dilemmaCard.hintAgainst);
    }


    endGame() {
        gameUI.displayEnd();
    }
}

const game = new Game();