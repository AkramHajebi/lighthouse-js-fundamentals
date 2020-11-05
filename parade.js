
const moves = ['north', 'north', 'west', 'west', 'north', 'east','south'];

const finalPosition = function (moves) {
  let position = [0,0];
  for (const move of moves) {
    if (move === "north") {
      position[1] ++;
    } else if (move === "south") {
      position[1] --;
      
    }else if (move === "east") {
      position[0] ++;
      
    }else {
      position[0] --;
      
    }
  }
  return position;
}


console.log(finalPosition(moves));