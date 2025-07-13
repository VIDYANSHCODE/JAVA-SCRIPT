let options = ["stone", "paper", "scissor"];
let my_point = 0;
let comp_point = 0;
let game = true;
while (game) {
  let num = Math.floor(Math.random() * 3);

  let choose = prompt("choose bw stone, paper, scissor");

  if (options[num] == "stone") {
    if (choose == "stone") {
      alert("both of you choose same");
    } else if (choose == "paper") {
      alert("you win this time");
      my_point++;
    } else if (choose == "scissor") {
      alert("you loose this time");
      comp_point++;
    } else {
      alert("invalid options");
    }
  } else if (options[num] == "paper") {
    if (choose == "paper") {
      alert("both of you choose same");
    } else if (choose == "scissor") {
      alert("you win this time");
      my_point++;
    } else if (choose == "stone") {
      alert("you loose this time");
      comp_point++;
    } else {
      alert("invalid options");
    }
  } else if (options[num] == "scissor") {
    if (choose == "scissor") {
      alert("both of you choose same");
    } else if (choose == "stone") {
      alert("you win this time");
      my_point++;
    } else if (choose == "paper") {
      alert("you loose this time");
      comp_point++;
    } else {
      alert("invalid options");
    }
  } else {
  }

  if (my_point == 5) {
    game = false;
    alert("you have WON!");
  } else if (comp_point == 5) {
    game = false;
    alert("you have LOST!");
  }

  alert(`current score is ${my_point} - ${comp_point}`);
}
