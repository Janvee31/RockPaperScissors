let userscore=0;
let compscore=0;
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore");
let compscorePara = document.querySelector("#compScore");
const resetFun = () => {
    userscore=0;
    compscore=0;
    userScorePara.innerHTML= userscore;
    compscorePara.innerHTML= compscore;
}
const getCompChoice = ()=>{
    const choiceArray = ["rock","paper","scissor"];
    let ind = Math.floor(Math.random() * 3);
    return choiceArray[ind];
}
const showWin = (userWin) => {
    if(userWin){
            userscore++;
            userScorePara.innerHTML= userscore;
            console.log("You won");
            msg.innerHTML="You Won!";
            msg.style.backgroundColor= "green";
            msg.style.color="#fff"
        }
        else{
            compscore++;
            compscorePara.innerHTML= compscore;
            console.log("You lost");
            msg.innerHTML="You Lost";
            msg.style.backgroundColor= "red";
            msg.style.color="#fff"
        }
}
const drawGame=()=>{
    console.log("Draw game");
    msg.innerHTML="Draw game";
    msg.style.backgroundColor =  "#e3eaa7";
    msg.style.color="black"
}
const playgame = (userChoice)=>{
    const compChoice = getCompChoice();
    console.log("Computer's choice: ", compChoice);
    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }else{
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor"?false : true;
        }
        else{
            userWin = compChoice==="rock"?false : true;
        }
        showWin(userWin);
    }
}
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let choiceId = choice.getAttribute("id");
        console.log("Your choice:", choiceId);
        playgame(choiceId);
    })
});
