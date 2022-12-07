class Game {


    startGame(){
        socket.startGame();
    }


    setupGame(cardPackage) {
        gameUI.displayGamePage()

        this.currentRound = cardPackage.currentRound;
        this.dilemmaCards = cardPackage.cardPackage.dilemmaModels;

        this.currentCard = this.dilemmaCards[this.currentRound];

        this.gameName = cardPackage.cardPackage.enName;
        this.totalCards = this.dilemmaCards.size;

        this.nextCard()
    }

    nextRound(newRound){
        this.currentRound = newRound;
        this.nextCard();
    }

    forwardOneCard(){
        this.currentRound++;
        socket.nextCard(this.currentRound);
    }

    backOneCard(){
        if (this.currentRound !== 0){
            this.currentRound--;
            socket.nextCard(this.currentRound);
        }

    }

    // render card
    nextCard(){
        let dilemmaCard = this.dilemmaCards[this.currentRound];

        // render object
        this.newCard = new RenderCard(dilemmaCard)
        this.newCard.renderCard($('#card-body'));
    }


    renderForAgainstText(){
        console.log(this.newCard.dilemmaCard.hintFor)
        console.log(this.newCard.dilemmaCard.hintAgainst)


        $('#for-text').text(this.newCard.dilemmaCard.hintFor);
        $('#against-text').text(this.newCard.dilemmaCard.hintAgainst);
    }






    endGame(){
        gameUI.displayEnd();

    }






}

const game = new Game();

