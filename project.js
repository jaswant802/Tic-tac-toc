let Boxs = document.querySelectorAll(".box");
let rest = document.querySelector(".re-set");
let reslt = document.querySelector(".win_msg");
let win_box = document.querySelector(".win_box");
let hide = document.querySelector(".hide");
let new_game = document.querySelector(".new_game");
let game_box = document.querySelector(".game_box"); 
let text_h1 = document.querySelector(".text-h1");


let players = true;

let conditons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const showwinner = (winners,box) => {
     
  for (let box of Boxs) {
    box.disabled = true;
     box.style.pointerEvents = "none";
box.style.opacity = "0.6"; 
  }  
  setTimeout(() => {
   reslt.innerText = `🎉 Congratulations! Player ${winners} wins!`;
  win_box.classList.remove("hide");
  game_box.classList.add("hidden");
  rest.classList.add("hidden");
  }, 3000);
};

const winner = () => {
  for (let check of conditons) {
    if (
      Boxs[check[0]].innerText !== "" &&
      Boxs[check[0]].innerText === Boxs[check[1]].innerText &&
      Boxs[check[1]].innerText === Boxs[check[2]].innerText
    ) {
      showwinner(Boxs[check[0]].innerText);
    }
  }
};
Boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (players === true) {
      box.innerText = "X";
      box.classList.add("X");
      

      players = false;
    } else {
      box.innerText = "O";
      box.classList.add("O");
     
      players = true;
    }
    box.disabled = true;
    winner();
  });
});

rest.addEventListener("click", () => {
   players = true; 
  for (let box of Boxs) {
    box.disabled = false;
    box.innerText = "";
    win_box.classList.add("hide");
  }
});

new_game.addEventListener("click", () => {
  players = true; 
  for (let box of Boxs) {
    box.disabled = false;
    box.innerText = "";
    win_box.classList.add("hide");
    game_box.classList.remove("hidden");
    rest.classList.remove("hidden");
     
  }
});
