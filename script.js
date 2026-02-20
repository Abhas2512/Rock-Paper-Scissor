let playerScore=0;
let computerScore=0;

const buttons=document.querySelectorAll(".choice");
const resultText=document.getElementById("resultText");
const pScore=document.getElementById("playerScore");
const cScore=document.getElementById("computerScore");

const options=["rock","paper","scissor"];

buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{

    ripple(btn);

    let player=btn.dataset.choice;
    let computer=options[Math.floor(Math.random()*3)];

    play(player,computer,btn);
  });
});


function play(player,computer,btn){

  removeGlow();

  if(player===computer){
    resultText.innerText="Draw 🤝";
    return;
  }

  if(
    (player==="rock" && computer==="scissor")||
    (player==="paper" && computer==="rock")||
    (player==="scissor" && computer==="paper")
  ){
    playerScore++;
    resultText.innerText=`You Win! ${player} beats ${computer}`;
    btn.classList.add("win");
  }
  else{
    computerScore++;
    resultText.innerText=`Computer Wins! ${computer} beats ${player}`;
    btn.classList.add("lose");
  }

  pScore.innerText=playerScore;
  cScore.innerText=computerScore;
}


function removeGlow(){
  buttons.forEach(b=>{
    b.classList.remove("win","lose");
  });
}


/* ripple effect */
function ripple(button){
  let circle=document.createElement("span");
  circle.className="ripple";
  button.appendChild(circle);
  setTimeout(()=>circle.remove(),500);
}


/* reset */
document.getElementById("reset").onclick=()=>{
  playerScore=0;
  computerScore=0;
  pScore.innerText=0;
  cScore.innerText=0;
  resultText.innerText="Choose your move";
  removeGlow();
};