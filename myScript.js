console.log("Hello World");


   window.onload = function(){

    const rock_btn = document.getElementById('el_rock');
    const paper_btn = document.getElementById('el_paper');
    const scissors_btn = document.getElementById('el_scissors');
    const counter = document.getElementById('counter');
    
    console.log(rock_btn);
    
    rock_btn.addEventListener("click", () => game("rock"));
    paper_btn.addEventListener("click", () => game("paper"));
    scissors_btn.addEventListener("click", () => game("scissors"));
    
    return counter;
    
   } 



let comp_choice = () => { 

    const ran_num = Math.floor(Math.random() * 3);
    let option;

    if(ran_num === 0){

        option = "rock";
    }
    else if(ran_num === 1){
        option = "paper";
    }
    else{
        option = "scissors";

    }
    console.log(option + "computer");

    return option;

};

let winner;
let congrats;

function playRound(comp_choice, user_choice){


    
    if (comp_choice === user_choice){
        winner = null;
    }
    else if (comp_choice === "rock" & user_choice=== "paper"){
        winner = "user";

    }
    else if (comp_choice === "rock" & user_choice=== "scissors"){
        winner = "computer";

    }
    else if (comp_choice === "paper" & user_choice=== "rock"){
        winner = "computer";

    }
    else if (comp_choice === "paper" & user_choice=== "scissors"){
        winner = "user";

    }
    else if (comp_choice === "scissors" & user_choice=== "paper"){
        winner = "computer";

    }
    else if (comp_choice === "scissors" & user_choice=== "rock"){
        winner = "user";

    }

   

    return winner;
}

function congrat (winner, user_choice, comp_choice){
    let congrats;
    if (winner==="user"){

        congrats = `You won! ${user_choice} beats ${comp_choice}`
    }
    else if (winner==="computer"){
        congrats = `You lose! ${comp_choice} beats ${user_choice}`
    }
    else congrats = "There was a draw";

    return congrats;
}
/*console.log(playRound(comp_choice(), user_choice));*/

function game(user_choice, counter){

    for (let i=0; i<5;i++){
        /*let user_choice = prompt("TYPE ROCK, PAPER OR SCISSORS").toLowerCase();*/
        
        let compu_choice;
        compu_choice = comp_choice();
        
        
        console.log(counter);
        let winner_round = playRound(compu_choice, user_choice);
        console.log(congrat(winner, user_choice, compu_choice));
        alert(congrat(winner, user_choice, compu_choice));
        counter.innerHTML = "HELLO";
    }

    

}
game();

function getUserChoice(){
    let user_choice;
    document.getElementById("el_rock").addEventListener("click",);
} 

function click_rock(){
    

document.getElementById("el_rock").addEventListener("click",game());
console.log("You chose rock");

}