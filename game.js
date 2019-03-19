// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const images = [...document.querySelectorAll(".select img")];
const start = document.querySelector(".start");
const winner = document.querySelector(".winner");
const wynikiGry = document.querySelector(".yourChoice");
const wynikiGry2 = document.querySelector(".aiChoice");
let twojWybor;
let comChoice;
let wynik;
const game = {
    choice: false,
    gamesNumber: 0,
    gamesWon: 0,
    gamesLost: 0,
    gamesDraw: 0,
}

function playerChoice() {
    images.forEach(asdf => {
        asdf.style.boxShadow = "0 0 0 0"
    })
    this.style.boxShadow = "0 0 0 5px blue";
    game.choice = true;
    wynikiGry.textContent = this.dataset.option
    twojWybor = this.dataset.option
}

function startGame() {
    if (!game.choice) return alert("wybierz znak");
    else {
        let aiChoice = Math.floor(Math.random() * 3);
        wynikiGry2.textContent = images[aiChoice].dataset.option;
        comChoice = images[aiChoice].dataset.option
        wynikiGry.textContent = twojWybor;
        porownanie();
        winner.textContent = wynik;
        switch (wynik) {
            case "wygrałeś":
                ++game.gamesWon;
                break
            case "przegrałeś":
                ++game.gamesLost;
                break
            default:
                ++game.gamesDraw;
        }
        document.querySelector(".numbers span").textContent = ++game.gamesNumber
        document.querySelector(".wins span").textContent = game.gamesWon
        document.querySelector(".losses span").textContent = game.gamesLost
        document.querySelector(".draws span").textContent = game.gamesDraw

    }
}
images.forEach(function (image) {
    image.addEventListener("click", playerChoice)
});

function porownanie() {
    switch (twojWybor) {
        case "papier":
            switch (comChoice) {
                case "papier":
                    wynik = "remis"
                    break
                case "kamień":
                    wynik = "wygrałeś"
                    break
                case "nożyczki":
                    wynik = "przegrałeś"
                    break
            }
            break

        case "kamień":
            switch (comChoice) {
                case "papier":
                    wynik = "przegrałeś"
                    break
                case "kamień":
                    wynik = "remis"
                    break
                case "nożyczki":
                    wynik = "wygrałeś"
                    break
            }
            break

        case "nożyczki":
            switch (comChoice) {
                case "papier":
                    wynik = "wygrałeś"
                    break
                case "kamień":
                    wynik = "przegrałeś"
                    break
                case "nożyczki":
                    wynik = "remis"
                    break
            }
            break
    }

}
start.addEventListener("click", startGame)