let choicebtn = document.querySelectorAll(".box");
let userscore = 0;
let compscore = 0;
let resultmsg = document.querySelector(".winmsg");
let you = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score")

choicebtn.forEach((choice) => {
  choice.addEventListener("click", () => {

    let userchoice = choice.getAttribute("id");
    let compchoice = gencompchoice();

    checkwinner(userchoice, compchoice);
  });
});

const gencompchoice = () => {
  let arr = ["Paper", "Rock", "Scissor"];
  return arr[Math.floor(Math.random() * 3)];
};

const checkwinner = (userchoice, compchoice) => {
  if (userchoice === compchoice) {
    resultmsg.innerText = `Game is Draw`;
    resultmsg.style.backgroundColor = "#081b31";
  } else {
    let userwin = true;
    if (userchoice === "Paper") {
      userwin = compchoice === "Rock" ? true : false;
    } else if (userchoice === "Rock") {
      userwin = compchoice === "Paper" ? false : true;
    } else {
      userwin = compchoice === "Rock" ? false : true;
    }
    result(userwin);
  }
};

const result = (win) => {
  if (win) {
    resultmsg.innerText = `You Win`;
    resultmsg.style.backgroundColor = "green";
  } else {
    resultmsg.innerText = `You Lose`; 
    resultmsg.style.backgroundColor = "red";   
  }
  score(win);
};

const score = (whowin)=>{
    if(whowin){
        userscore++
        you.innerText = `${userscore}`;
    }else if(whowin == false){
        compscore++
       comp.innerText = `${compscore}`;
    }
}