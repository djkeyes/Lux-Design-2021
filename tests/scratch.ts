import { generateGame } from '../src/Game/gen';
import { Game } from '../src/Game';

const game = generateGame();
console.log(game.map.getMapString());
// console.log(game.cities);

// console.log(game.state);
// console.log('team 0 units', game.state.teamStates[0].units);
const units = game.state.teamStates[0].units;
game.moveUnit(0, 'u_0', Game.DIRECTIONS.SOUTH);
game.map.resourcesMap.forEach((cell) => {
  game.handleResourceRelease(cell);
});
console.log(units.get('u_0'));

console.log(game.map.getMapString());
