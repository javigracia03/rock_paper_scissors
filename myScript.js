console.log("Hello World");

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

function game(){

    for (let i=0; i<5;i++){
        let user_choice = prompt("TYPE ROCK, PAPER OR SCISSORS").toLowerCase();
        let compu_choice;
        compu_choice = comp_choice();
        
        let winner_round = playRound(compu_choice, user_choice);
        console.log(congrat(winner, user_choice, compu_choice));
    }



}
game();