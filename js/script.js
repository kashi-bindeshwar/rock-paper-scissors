let totalMatchScore = 0;
let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const totalMatch = document.querySelector("#totalMatch");
const userScoreData = document.querySelector("#userScore");
const compScoreData = document.querySelector("#compScore");
const draw = document.querySelector("#draw")

let resetBtn = document.querySelector("#resetButton");

showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreData.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

        totalMatchScore++;
        totalMatch.innerText = totalMatchScore;
    }
    else{
        compScore++;
        compScoreData.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

        totalMatchScore++;
        totalMatch.innerText = totalMatchScore;
    }
}

const drawGame = () => {
    drawScore++;
    draw.innerText = drawScore;
    msg.innerText = "Game is Draw. Play Again";
    msg.style.backgroundColor = "black";

    totalMatchScore++;
    totalMatch.innerText = totalMatchScore;
}

const genCompChoice = () =>{
    const Option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return Option[randIdx];
}

const playGame = (userChoice) =>{
    //Generate Computer Choice (compChoice)
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
    {
        // Game is draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock")
        {
            // Computer Option ---> paper, scissors
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper")
        {
            // Computer Option ---> rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // Computer Option ---> rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () =>{
    totalMatchScore = 0;
    userScore = 0;
    compScore = 0;
    drawScore = 0;

    totalMatch.innerText = 0;
    userScoreData.innerText = 0;
    compScoreData.innerText = 0;
    draw.innerText = 0;

    msg.innerText = "Play your move"
    msg.style.backgroundColor = "black";
}

resetBtn.addEventListener("click", resetGame);
