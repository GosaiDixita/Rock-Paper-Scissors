let userScore = 0;
let computer = 0;

const msg = document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');
const userScoreBoard = document.querySelector('#user-score');
const compScoreBoard = document.querySelector('#comp-score');
const resetbtn = document.querySelector('#reset');

const gencompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const resetGame = () => {
    userScore = 0;
    computer = 0;
    userScoreBoard.innerText = userScore;
    compScoreBoard.innerText = computer;
    msg.innerText = 'Make your move!';
    // msg.style.backgroundColor = 'white';
};

const drawgame = () => {
    msg.innerText = 'Game Was Draw';
    msg.style.backgroundColor = 'gray';
}

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beat computer's ${compchoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        computer++;
        compScoreBoard.innerText = computer;
        msg.innerText = `You Lose ! Computer's ${compchoice} beat your ${userchoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const palyGame = (userchoice) => {
    console.log('user choise', userchoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log('computer choise', compchoice);


    if (userchoice === compchoice) {
        //drwa game
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === 'rock') {
            //scissors , paper
            userwin = compchoice === 'paper' ? false : true;
        } else if (userchoice === 'paper') {
            //rock, sissors
            userwin = compchoice === 'scissors' ? false : true;
        } else {
            //rock, paper
            userwin = compchoice === 'rock' ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);

    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        palyGame(userchoice);
       
    });
});
resetbtn.addEventListener("click",()=>{
    resetGame();
});