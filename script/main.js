const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');

// holds the value of selected weapon: rock, paper, scissors
let selected_weapon;

const battle = function () {
  let x = document.querySelector("#computerScore");
  x.innerHTML = "1";
  if (selected_weapon) {
    let weapon = selected_weapon.getAttribute('id')
    console.log(weapon)
    let computer_weapon = generateComputerWeapon();
    console.log(computer_weapon)
  }
 
};
const selectedWeapon = function (weapon) {
  // console.log(weapon);
  if (selected_weapon) {
    selected_weapon.classList.remove('selected');
    selected_weapon = null;
  }
  selected_weapon = document.getElementById(weapon) // we assign a  weapon
  selected_weapon.classList.add('selected'); // selected weapon will be higligthed
}
const generateComputerWeapon = function () {
  // we generate a random number from 1-3
  const number = Math.floor((Math.random() * 3) + 1);
  switch (number) {
    case 1:
      return "rock"; // if number is 1 assign rock
    case 2:
      return "paper"; // if number is 2 assign paper 
    case 3:
      return "scissors"; // if number is 3 assign scissors
  }
}