
// alert("Hello World");
var weaponOfChoice = prompt("You walk into a castle and there is a army after you. You can only choose between three weapons. Which do you choose? A sword, dragon, direwolf, or just die?");

if(weaponOfChoice === "sword"){
      weaponOfChoice = prompt("I hope you can fight because, you're as good as dead!");
    } else if (weaponOfChoice === "dragon") {
      weaponOfChoice = prompt("Congratulations! You're a killer!!! And now you have a flying dragon!!");
    } else if (weaponOfChoice ==="direwolf") {
      weaponOfChoice = prompt("You just might have a fighting chance! Direwolves are the buisness!")
  } else {
      alert("You are about to die!");
    };
