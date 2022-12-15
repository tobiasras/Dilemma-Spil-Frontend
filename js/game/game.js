class Game {


    saveAnswer(){
        this.dilemmaCards[this.currentRound].gameAnswersModels[0] = {
            dilemmaDifficulty: $('#dilemma-importance').val(),
            discussionQuality: $('#dilemma-value').val()
        };
    }


    startGame(){
        socket.startGame();
    }


    setupGame(gameLobby) {
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

    nextRound(newRound){

        // save method goes here
        game.saveAnswer();


        this.currentRound = newRound;

        console.log("round: " + newRound)

        this.nextCard();
    }

    forwardOneCard(){

        if (this.currentRound < this.totalCards){
            let newRound = this.currentRound + 1;
            socket.nextCard(newRound);
        } else {
            this.gameLobby.cardPackage.dilemmaModels = this.dilemmaCards;

            /*
                api("api/post/save/lobbyStats","POST", this.gameLobby).then(response => {
                    console.log(response);
                });
             */

            socket.nextCard(this.currentRound);
        }

        // tells server to load new card for all players in lobby



    }
    backOneCard(){

        if (this.currentRound !== 0){


            let newRound = this.currentRound - 1;
            socket.nextCard(newRound);


            socket.nextCard(newRound);
        }

    }

    // render card
    nextCard(){
        let dilemmaCard = this.dilemmaCards[this.currentRound];

        console.log(dilemmaCard);
        console.log(isLanguageDa);

        // render object
        this.newCard = new RenderCard(dilemmaCard, isLanguageDa);
      

        this.newCard.renderCard($('#card-body'));
    }
    renderForAgainstText(){
        $('#for-text').text(this.newCard.dilemmaCard.hintFor);
        $('#against-text').text(this.newCard.dilemmaCard.hintAgainst);
    }



    endGame(){
        gameUI.displayEnd();
    }
}

const game = new Game();