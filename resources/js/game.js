import Integer from "lodash";

////// Player coding //////////

class player {
    constructor(picture, score){
        this.pictureD = picture;
        this.scoreD = score;
    }

    set score(value) {
        this.scoreD.innerHTML = value;
    }
    get score() {
        return this.scoreD.innerHTML;
    }

    active() {
        player1.pictureD.classList.remove('active');
        player2.pictureD.classList.remove('active');
        this.pictureD.classList.add('active');
    }

    isActive() {
        return this.pictureD.classList.contains("active")
    }
}

////// Player done //////////

////// Game Coding //////////

class game {
    static winning() {
        if (player1.score>player2.score) {
            return 'Player 01';
        }
        else {
            return 'Player 02';
        }
    }

    static startGame() {
        this.round = 1;
        this.resetScore();
        player1.active();
        game.activePlayer = 1;
        this.hideCard();
    }

    static endGame() {
        const winner = game.winning();
        game.resetScore();
        game.hideCard();
        alert(`Parabéns, ${winner}, Você ganhou!`)
    }

    static resetScore() {
        player1.score = 0;
        player2.score = 0;
    }

    static showCard() {
        selected.classList.remove('hidden');
    }

    static hideCard() {
        selected.classList.add('hidden');
    }

    static selectCard() {
        var cardValue = (Math.floor((Math.random() * 13) + 1 ));
        game.changeCardto(cardValue);

        if(game.activePlayer == 1 ) {
            player1.score = Integer.parseInt((player1.score)) + Integer.parseInt((cardValue));
            if(player1.score >= 21 ) {
                game.endGame();
            }
        } else {
            player2.score = Integer.parseInt((player2.score)) + Integer.parseInt((cardValue));
            if(player2.score >= 21 ) {
                game.endGame();
            }
        }

        game.showCard();
    }

    static nextRound() {
        game.round++;

        if(game.activePlayer == 1){
            player1.pictureD.classList.remove('active');
            player2.pictureD.classList.add('active');
            game.activePlayer = 2;
        } else {
            player2.pictureD.classList.remove('active');
            player1.pictureD.classList.add('active');
            game.activePlayer = 1;
        }

        game.hideCard();

    }

    static changeCardto(value){
        let src = '/assets/carts/'+value+'.png';
        selected.setAttribute('src',src);
    }
}

////// Game Done ////////////
