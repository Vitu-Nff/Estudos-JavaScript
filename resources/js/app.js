import './bootstrap';
import Integer from "lodash";

console.log('Hello, World!');

////// Player coding //////////
// Get Info
const picture = document.getElementsByClassName('player');
const score = document.getElementsByClassName('score');

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

/* Cartas */
const baralho = document.getElementById('baralho')
const selected = document.getElementById('selectedCard');

/* botões */
const pular = document.getElementById('pular')
const finalizar = document.getElementById('finalizar')
const reiniciar = document.getElementById('reiniciar')

class game {
    static winning() {
        if(player1.score > 21) {
            return 'Player 2';
        }
        else if (player2.score > 21) {
            return 'Player 1';
        }
        else {
            let points1 = player1.score - 21;
            let points2 = player2.score - 21;
            if( points1 > points2 ) {
                return 'Player 1';
            } else {
                return 'Player 2';
            }
        }
    }

    static startGame() {
        game.round = 1;
        game.resetScore();
        player1.active();
        game.activePlayer = 1;
        game.hideCard();
    }

    static endGame() {
        const winner = game.winning();
        game.hideCard();
        setTimeout(() => {
            alert(`Parabéns, ${winner}, Você ganhou!`);
            game.startGame();
        }, 250)
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
            if(player1.score > 21 ) {
                game.endGame();
            }
        } else {
            player2.score = Integer.parseInt((player2.score)) + Integer.parseInt((cardValue));
            if(player2.score > 21 ) {
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

const player1 = new player(picture[0],score[0]);
const player2 = new player(picture[1],score[1]);

game.startGame();

function logActivePlayer() {
    console.log(game.activePlayer);
}

pular.addEventListener("click", game.nextRound);
finalizar.addEventListener("click", game.endGame);
reiniciar.addEventListener("click", game.startGame);
baralho.addEventListener("click", game.selectCard);


