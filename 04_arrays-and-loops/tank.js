let roadMines = [true, false, false, false, false, false, false, false, false, true];
let health = 2;

for (let position in roadMines) {
  console.log(`Танк переместился на ${parseInt(position) + 1}`);
  if (roadMines[position] === true) {
    health--;
    if (health === 0) {
      console.log('танк уничтожен');
      break;
    }
    console.log('танк повреждён');
  }
}