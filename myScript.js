console.log("Hello World");

let comp_choice = () => { 

    const ran_num = Math.floor(Math.random() * 3);
    let option;
    console.log(ran_num);

    if(ran_num === 0){

        option = "rock";
    }
    else if(ran_num === 1){
        option = "paper";
    }
    else{
        option = "scissors";

    }

    console.log(option);

};

comp_choice();