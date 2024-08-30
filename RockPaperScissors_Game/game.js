let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Game was draw !!";
    msg.style.color = "blue";
}
const playGame = (userChoice) => {

    //Generate computer choice

    const compChoice = genCompChoice();


    //result

    if(userChoice == compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin =  compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper")
        {
            userWin = compChoice == "scissors" ? false : true;
        }
        else if(userChoice == "scissors")
        {
            userWin = compChoice == "rock" ? false : true;
        }
        if(userWin)
        {
            msg.innerText = "Your win the game !!";
            msg.style.color = "green";
            userScore++;
            user_score.innerText = userScore;
        }
        else if(userWin == false){
            msg.innerText = "You loose the game !!";
            msg.style.color = "red";
            compScore++;
            comp_score.innerText = compScore;
        }    
    }
}
const genCompChoice = ()=> {
    const options = ['rock', 'paper', 'scissors'];
   const ranIdx = Math.floor(Math.random()*3);
   return options[ranIdx];
}
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {

        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
})
});