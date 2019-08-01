const computer_score = document.querySelector("#computer_score");
const player_score = document.querySelector("#player_score");
const computer_pick = document.querySelector("#computer_pick");
const you_pick = document.querySelector("#you_pick");
const result_message = document.querySelector("#result_message");
const img_result = document.querySelector("#img_result");
const modal_container = document.querySelector("#modal_container");
// holds the value of selected weapon: rock, paper, scissors
let selected_weapon;
let player_points = 0;
let computer_points = 0;

const battle = function() {
  if (selected_weapon) {
    let player_weapon = selected_weapon.getAttribute("id");
    console.log(player_weapon);
    let computer_weapon = generateComputerWeapon();
    console.log(computer_weapon);
    // if player and computer are not draw
    if (!determineDraw(player_weapon, computer_weapon)) {
      // we now determine the winner
      if (determineWinner(player_weapon, computer_weapon)) {
        player_points = parseInt(player_points) + 1;
        player_score.innerHTML = player_points;
        openModal(
          player_weapon,
          computer_weapon,
          "You Win!!!",
          "../assets/happy.png",
        );
        console.log("winner player");
      } else {
        computer_points = parseInt(computer_points) + 1;
        computer_score.innerHTML = computer_points;
        openModal(
          player_weapon,
          computer_weapon,
          "You Lose...",
          "../assets/sad.png",
        );
        console.log("winner computer");
      }
    } else {
      console.log("draw");
    }
  }
};
const selectedWeapon = function(weapon) {
  // console.log(weapon);
  if (selected_weapon) {
    selected_weapon.classList.remove("selected");
    selected_weapon = null;
  }
  selected_weapon = document.getElementById(weapon); // we assign a  weapon
  selected_weapon.classList.add("selected"); // selected weapon will be higligthed
};
const generateComputerWeapon = function() {
  // we generate a random number from 1-3
  const number = Math.floor(Math.random() * 3 + 1);
  switch (number) {
    case 1:
      return "rock"; // if number is 1 assign rock
    case 2:
      return "paper"; // if number is 2 assign paper
    case 3:
      return "scissors"; // if number is 3 assign scissors
  }
};
const determineDraw = function(p_weapon, c_weapon) {
  // return true if draw; both player and computer selected same
  return p_weapon == c_weapon;
};
const determineWinner = function(p_weapon, c_weapon) {
  // return 1 if player wins, return 0 if computer winds
  if (p_weapon == "rock" && c_weapon == "paper") {
    return 0;
  } else if (p_weapon == "rock" && c_weapon == "scissors") {
    return 1;
  } else if (p_weapon == "paper" && c_weapon == "rock") {
    return 1;
  } else if (p_weapon == "paper" && c_weapon == "scissors") {
    return 0;
  } else if (p_weapon == "scissors" && c_weapon == "rock") {
    return 0;
  } else if (p_weapon == "scissors" && c_weapon == "paper") {
    return 1;
  }
};
const openModal = function(p_pick, c_pick, message, image_src) {
  modal_container.style.display = "flex";
  you_pick.innerHTML = p_pick;
  computer_pick.innerHTML = c_pick;
  result_message.innerHTML = message;
  img_result.src = image_src;
};
const closeModal = function() {
  modal_container.style.display = "none";
};
window.addEventListener("click", function(event) {
  if (event.target == modal_container) {
    modal_container.style.display = "none";
  }
});
