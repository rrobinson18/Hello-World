

var weaponOfChoice = prompt("You walk into a castle alone and immediately you are surrounded by an army. You can only choose between three weapons. Which weapon do you choose? A 'sword', 'dragon' or 'direwolf '");

if(weaponOfChoice === "sword"){
      weaponOfChoice = alert("I hope you can fight because, you're as good as dead!");
    } else if (weaponOfChoice === "dragon") {
      weaponOfChoice = alert("Congratulations! You're still alive!!! And now you have a flying dragon!!");
    } else if (weaponOfChoice ==="direwolf") {
      weaponOfChoice = alert("You just might have a fighting chance! Direwolves are the buisness!")
  } else {
      alert("You are about to die!");
    };
