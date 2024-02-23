let userscore = 0;
let compscore =0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx =Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawgame=()=>{
    console.log("GAME WAS DRAW");
    msg.innerText="game was draw play again!";
    //msg.Style.backgroundcolor="purple";
    msg.style.backgroundColor="blue";
}
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
console.log("you win");
msg.innerText=`you win!!!! your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
//     generate computer choice
// 
const compChoice=genCompChoice();
console.log("comp choice=",compChoice);

if(userChoice===compChoice){
    drawgame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
      userwin=compChoice==="scissors"?false:true;
    }else{
        userwin=compChoice==="rock"?false:true;
    }
    showwinner(userwin,userChoice,compChoice);
}

};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
      playgame(userChoice);
    });
    });
