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

let user_choice = prompt("TYPE ROCK, PAPER OR SCISSORS").toLowerCase();
console.log(user_choice);
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

    if (winner==="user"){

        congrats = `You won! ${user_choice} beats ${comp_choice}`
    }
    else{
        congrats = `You lose! ${comp_choice} beats ${user_choice}`
    }

    return congrats;
}
console.log(playRound(comp_choice(), user_choice));