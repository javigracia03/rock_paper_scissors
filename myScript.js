console.log("Hello World");


    let us_count = 0;
    let cpu_count = 0;

   window.onload = function(){

    const rock_btn = document.getElementById('el_rock');
    const paper_btn = document.getElementById('el_paper');
    const scissors_btn = document.getElementById('el_scissors');
    
    
    console.log(counter);
    
    rock_btn.addEventListener("click", () => game("rock"));
    paper_btn.addEventListener("click", () => game("paper"));
    scissors_btn.addEventListener("click", () => game("scissors"));
    
    
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


function playRound(comp_choice, user_choice){

    let winner;
    let congrats;
    
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
        us_count ++;
        congrats = `You won! ${user_choice} beats ${comp_choice}`
    }
    else if (winner==="computer"){
        congrats = `You lose! ${comp_choice} beats ${user_choice}`
        cpu_count++;
    }
    else congrats = "There was a draw";

    return congrats;
}
/*console.log(playRound(comp_choice(), user_choice));*/

function game(user_choice){

        const cpu_score = document.getElementById("comp_score");
        const user_score = document.getElementById("user_score");
        const counter = document.getElementById('counter');


            /*let user_choice = prompt("TYPE ROCK, PAPER OR SCISSORS").toLowerCase();*/
            
            let compu_choice;
            compu_choice = comp_choice();
            
            
            console.log(counter);
            let winner_round = playRound(compu_choice, user_choice);
            let congrats =congrat(winner_round, user_choice, compu_choice);
            console.log(congrats);
             /*alert(congrat(winner_round, user_choice, compu_choice));*/
            counter.innerHTML = congrats;
            user_score.innerHTML = us_count;
            cpu_score.innerHTML = cpu_count;
            
        
    

    

    

}


function getUserChoice(){
    let user_choice;
    document.getElementById("el_rock").addEventListener("click",);
} 

function click_rock(){
    

document.getElementById("el_rock").addEventListener("click",game());
console.log("You chose rock");

}